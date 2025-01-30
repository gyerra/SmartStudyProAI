import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const cleanJSONResponse = (jsonStr) => {
  try {
    let cleaned = jsonStr.replace(/```json/g, '').replace(/```/g, '');
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    return JSON.parse(jsonMatch ? jsonMatch[0] : cleaned);
  } catch (error) {
    throw new Error("Invalid JSON format: " + error.message);
  }
};

export async function POST(req) {
  try {
    const { syllabus, totalDays, hoursPerDay, action } = await req.json();
    
    const groq = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama3-70b-8192"
    });


const template = action === 'schedule' 
? `Syllabus: {syllabus}
Create {totalDays}-day plan. Strict JSON format:
{{
"schedule": [{{
  "day": 1,
  "topics": [],
  "definitions": [],
  "exercises": [],
  "duration_hours": {hoursPerDay}
}}],
"total_hours": {totalHours}
}}`
: `Syllabus: {syllabus}
Create flashcards. Strict JSON format:
{{
"flashcards": [{{
  "question": "",
  "answer": "",
  "category": ""
}}]
}}`;

    const prompt = new PromptTemplate({
      template,
      inputVariables: action === 'schedule' 
        ? ['syllabus', 'totalDays', 'hoursPerDay', 'totalHours'] 
        : ['syllabus']
    });

    const chain = prompt.pipe(groq);
    const inputs = action === 'schedule' ? {
      syllabus,
      totalDays,
      hoursPerDay,
      totalHours: totalDays * hoursPerDay
    } : { syllabus };

    const response = await chain.invoke(inputs);
    let data = cleanJSONResponse(response.content);

    if (action === 'flashcards') {
      data.flashcards = data.flashcards.map(card => ({
        ...card,
        id: uuidv4(),
        created_at: new Date().toISOString(),
        next_review: new Date(Date.now() + 86400000).toISOString(),
        score: 0
      }));
    }

    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}