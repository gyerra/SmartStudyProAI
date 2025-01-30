"use client"

import { useState } from "react"
import { Terminal, BookOpen, Calendar, Brain, Sparkles, ArrowRight, Clock, Zap, Rocket } from "lucide-react"

export default function Home() {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/gayathri-yerra/', '_blank');
};
  const [syllabus, setSyllabus] = useState("")
  const [days, setDays] = useState(14)
  const [hours, setHours] = useState(2)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const generateContent = async (action) => {
    setLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          syllabus,
          totalDays: days,
          hoursPerDay: hours,
          action,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Generation failed")
      }

      const data = await response.json()
      setResult({ type: action, data })
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20 animate-[pan_20s_linear_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),rgba(0,0,0,0.5))]" />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-24 pb-20 text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 animate-pulse" />
            <h1 className="relative text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-text-shimmer">
              SmartStudyPro
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in">
            Transform any syllabus into a personalized study schedule and flashcards using advanced AI technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Terminal, label: "AI-powered learning" },
              { icon: Sparkles, label: "Smart optimization" },
              { icon: Zap, label: "Instant results" },
              { icon: Rocket, label: "Boost productivity" },
            ].map((feature, i) => (
              <div
                key={i}
                className="inline-flex items-center bg-gray-800/50 rounded-full p-2 pl-3 border border-gray-700/50 text-sm text-blue-300 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-gray-700/50"
              >
                <feature.icon className="w-4 h-4 mr-2" />
                <code>{feature.label}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
      <main className="relative z-10 container mx-auto px-4 max-w-4xl pb-20">
        <div className="relative group">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-gray-900/50 rounded-xl border border-gray-700/50 p-8 backdrop-blur-xl">
            <div className="mb-8">
              <label className="block mb-2 font-medium text-gray-300">Syllabus Content:</label>
              <textarea
                className="w-full p-4 rounded-lg bg-black/50 border border-gray-700/50 text-gray-100 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                value={syllabus}
                onChange={(e) => setSyllabus(e.target.value)}
                placeholder="Paste your syllabus here..."
                rows={6}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block font-medium text-gray-300">Study Days:</label>
                <div className="relative group">
                  <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                    <input
                      type="number"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/50 border border-gray-700/50 text-gray-100 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200"
                      value={days}
                      onChange={(e) => setDays(Math.max(1, Number.parseInt(e.target.value)))}
                      min="1"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-medium text-gray-300">Hours/Day:</label>
                <div className="relative group">
                  <div className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                    <input
                      type="number"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-black/50 border border-gray-700/50 text-gray-100 focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all duration-200"
                      value={hours}
                      onChange={(e) => setHours(Math.max(1, Number.parseInt(e.target.value)))}
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => generateContent("schedule")}
                disabled={loading}
                className="flex-1 group relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-400 hover:to-purple-500 disabled:from-gray-700 disabled:to-gray-800 disabled:text-gray-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,rgba(255,255,255,0.2)_180deg,rgba(255,255,255,0.2)_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {loading ? "Generating..." : "Generate Schedule"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => generateContent("flashcards")}
                disabled={loading}
                className="flex-1 group relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:from-purple-400 hover:to-pink-500 disabled:from-gray-700 disabled:to-gray-800 disabled:text-gray-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,rgba(255,255,255,0.2)_180deg,rgba(255,255,255,0.2)_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {loading ? "Generating..." : "Generate Flashcards"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {result && (
          <section className="mt-16 animate-fade-in">
            <div className="relative inline-block w-full text-center mb-12">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-75" />
              <h2 className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-text-shimmer">
                {result.type === "schedule" ? "📅 Your Study Schedule" : "📚 Your Flashcards"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(result.type === "schedule" ? result.data.schedule : result.data.flashcards).map((item, index) => (
                <div key={index} className="relative group perspective">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-xl bg-gray-800/90 border border-gray-700 backdrop-blur-xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                    {result.type === "schedule" ? (
                      <>
                        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-semibold">
                          Day {item.day}
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold text-blue-300 mb-2">Topics:</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                              {item.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-purple-300 mb-2">Exercises:</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                              {item.exercises.map((exercise, i) => (
                                <li key={i}>{exercise}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-pink-300">
                            <Clock className="w-4 h-4" />
                            <span>{item.duration_hours} hours</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                          {item.question}
                        </h3>
                        <p className="text-gray-300 mb-4 text-lg">{item.answer}</p>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                          <Sparkles className="w-3 h-3" />
                          {item.category}
                        </span>
                      </>
                    )}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-xl transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <footer className="relative z-10 text-center py-8">
        <div className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold">
          Powered by AI - Designed for the future of learning
        </div>
        <div onClick={handleClick} className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold">
          Built by Gayathri Yerra
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {[Terminal, Sparkles, Zap, Rocket, Brain].map((Icon, i) => (
            <Icon key={i} className="w-5 h-5 text-purple-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </footer>
    </div>
  )
}

