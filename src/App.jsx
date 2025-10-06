import { useState, useEffect } from 'react'
import { Heart, Sparkles, Copy, Check } from 'lucide-react'

function App() {
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem('herz-injektor-answers')
    return saved ? JSON.parse(saved) : {
      q1: '', q2: '', q3: '', q4: '', q5: '', q6: '',
      q7: '', q8: '', q9: '', q10: '', q11: '', q12: ''
    }
  })

  const [prompt, setPrompt] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    localStorage.setItem('herz-injektor-answers', JSON.stringify(answers))
  }, [answers])

  const handleChange = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }))
  }

  const generatePrompt = () => {
    const template = `
💖 HERZMOMENT-PROMPT

👤 CHARAKTER: ${answers.q1}

🎯 DER ALLTÄGLICHE WUNSCH
${answers.q2}

💔 WARUM ES WICHTIG IST
${answers.q3}

⚡ DIE STÖRUNG
${answers.q4}

🫀 KÖRPERLICHE REAKTION
${answers.q5}

🧠 DER INNERE KONFLIKT
${answers.q6}

🔥 DIE KLEINE REBELLION
${answers.q7}

✨ DIE MAGISCHE VERSUCHUNG
${answers.q8}

🚫 WARUM ER WIDERSTEHT
${answers.q9}

🌿 DER SINNLICHE MOMENT
${answers.q10}

💎 DIE EMOTIONALE ERKENNTNIS
${answers.q11}

➡️ DER ÜBERGANG
${answers.q12}

---

Schreibe diese Szene emotional, sinnlich und glaubwürdig.
    `.trim()
    setPrompt(template)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const questions = [
    { id: 'q1', label: '👤 Charakter wählen', placeholder: 'Welche Figur steht im Mittelpunkt?' },
    { id: 'q2', label: '🎯 Der alltägliche Wunsch', placeholder: 'Was will dein Charakter HEUTE?' },
    { id: 'q3', label: '💔 Warum es wichtig ist', placeholder: 'Emotionaler Grund dahinter' },
    { id: 'q4', label: '⚡ Die Störung', placeholder: 'Was verhindert diesen Wunsch?' },
    { id: 'q5', label: '🫀 Körperliche Reaktion', placeholder: 'Wie reagiert der Körper?' },
    { id: 'q6', label: '🧠 Der innere Konflikt', placeholder: 'Unausgesprochene Gedanken' },
    { id: 'q7', label: '🔥 Die kleine Rebellion', placeholder: 'Was tut er trotzdem?' },
    { id: 'q8', label: '✨ Die magische Versuchung', placeholder: 'Wie könnte Magie helfen?' },
    { id: 'q9', label: '🚫 Warum er widersteht', placeholder: 'Persönlicher Grund' },
    { id: 'q10', label: '🌿 Der sinnliche Moment', placeholder: '5-Sinne-Detail' },
    { id: 'q11', label: '💎 Die emotionale Erkenntnis', placeholder: 'Schmerzhafte Wahrheit' },
    { id: 'q12', label: '➡️ Der Übergang', placeholder: 'Dann passiert... (Plot greift ein)' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Herz-Injektor
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            12 emotionale Fragen für glaubwürdige Figurenmomente
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-6 mb-8">
          {questions.map((q, index) => (
            <div key={q.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <label className="block mb-3">
                <span className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">{index + 1}.</span>
                  {q.label}
                </span>
              </label>
              <textarea
                value={answers[q.id]}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                rows="3"
              />
            </div>
          ))}
        </div>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <button
            onClick={generatePrompt}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-6 h-6" />
            Prompt generieren
          </button>
        </div>

        {/* Generated Prompt */}
        {prompt && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">📝 Dein Schreibprompt</h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {copied ? (
                  <><Check className="w-5 h-5 text-green-600" /> Kopiert!</>
                ) : (
                  <><Copy className="w-5 h-5" /> Kopieren</>
                )}
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
              {prompt}
            </pre>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Made with ❤️ for writers by writers</p>
        </div>
      </div>
    </div>
  )
}

export default App
