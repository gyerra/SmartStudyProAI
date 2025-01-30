AI-Powered Study Planner

📌 Project Overview

This project is an AI-powered study planner that generates customized study schedules and flashcards based on a given syllabus. Users can input their syllabus, specify the number of days and hours per day they wish to study, and receive a structured study plan or flashcards to aid their learning process. The application leverages large language models (LLMs) via the Groq API for intelligent and efficient content generation.

🛠 Tech Stack

Frontend: Next.js

Backend: API routes in Next.js

AI/LLM: LangChain, Groq API

Model Used: LLaMA 3 (70B, 8192 context window)

📂 Project Structure

/ai-study-planner
│── /app
│   ├── /api
│   │   ├── /study-planner  # API route for LLM interaction
│   │   │   ├── route.js    # API logic and request handling
│   ├── page.js            # Frontend with input fields & buttons
│── .env                   # Environment variables (API keys, etc.)
│── package.json           # Dependencies & scripts
│── README.md              # Project documentation

🚀 Features

Generate Study Schedules: Create structured daily study plans based on the syllabus.

Generate Flashcards: Convert syllabus topics into flashcards for effective revision.

LLM-Powered: Uses LLaMA 3 (70B) via the Groq API to process and generate content.

JSON-Formatted Output: Ensures structured and consistent data parsing.

📌 How It Works

User Inputs:

Enter syllabus content.

Specify the total number of days.

Define study hours per day.

Actions:

Click "Generate Schedule" to receive a structured study plan.

Click "Generate Flashcards" to create revision flashcards.

Backend Processing:

API routes in Next.js handle user requests.

The request is sent to the LLM (LLaMA 3 - 70B) via Groq API.

The response is formatted as JSON and sent back to the frontend.

Display Output:

Study schedule or flashcards are rendered dynamically in the UI.

🔧 API Route & Prompt Design

To create an API route in Next.js:

The api folder is inside the app directory.

Inside, we have a /study-planner folder containing route.js.

This file contains an asynchronous function that:

Makes a POST request to the Groq API.

Sends the syllabus, total days, hours per day, and the selected action (schedule or flashcards).

Fetches and processes the structured JSON response from the LLM.

Prompt Templates

📅 Study Schedule Prompt

Syllabus: {syllabus}
Create {totalDays}-day plan. Strict JSON format:
{
  "schedule": [
    {
      "day": 1,
      "topics": [],
      "definitions": [],
      "exercises": [],
      "duration_hours": {hoursPerDay}
    }
  ],
  "total_hours": {totalHours}
}

🃏 Flashcards Prompt

Syllabus: {syllabus}
Create flashcards. Strict JSON format:
{
  "flashcards": [
    {
      "question": "",
      "answer": "",
      "category": ""
    }
  ]
}

🏗 Development & Deployment

Setup Instructions

Clone the Repository:

git clone https://github.com/yourusername/ai-study-planner.git
cd ai-study-planner

Install Dependencies:

npm install

Set Up Environment Variables:
Create a .env file in the root directory and add:

GROQ_API_KEY=your_api_key_here

Run the Development Server:

npm run dev

Access the App:
Open http://localhost:3000 in your browser.
