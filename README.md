AI-Powered Study Planner

📌 Project Overview

This project is an AI-powered study planner that generates customized study schedules and flashcards based on a given syllabus. Users can input their syllabus, specify the number of days and hours per day they wish to study, and receive a structured study plan or flashcards to aid their learning process. The application leverages large language models (LLMs) via the Groq API for intelligent and efficient content generation.

## 🛠 Tech Stack

- 🧑‍💻 **Frontend**: [Next.js](https://nextjs.org/)  
- 🛎️ **Backend**: API Routes in Next.js  
- 🤖 **LLM**: LangChain + [Groq API](https://console.groq.com/)  
- 🧠 **Model Used**: LLaMA 3 (70B, 8192 context window)  

📂 Project Structure

```
/ai-study-planner
│── /app
│   ├── /api
│   │   ├── /study-planner        # API route for LLM interaction
│   │   │   ├── route.js          # API logic and request handling
│   ├── page.js                   # Frontend with input fields & buttons
│── .env                          # Environment variables (API keys, etc.)
│── package.json                  # Dependencies & scripts
│── README.md                     # Project documentation
```

## 🚀 Features

- 📅 Generate structured daily **study plans**
- 🃏 Create topic-wise **flashcards** for revision
- 🤖 Powered by **LLaMA 3 via Groq**
- 📦 Clean **JSON-formatted output** for consistency

---

## 🌟 Improvements

- ⚡ Blazing-fast inference with Groq's LPU acceleration  
- 🧱 Modular API route structure for easy scaling  
- 🧑‍🎓 Tailored learning plans from raw syllabus  
- 💡 Clear separation of schedule and flashcard generation logic  

---

> *A smarter way to plan and retain your studies – effortlessly.*
