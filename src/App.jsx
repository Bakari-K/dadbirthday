import { useState } from 'react'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [answered, setAnswered] = useState(false)
  const [positions, setPositions] = useState({
    A: { x: 0, y: 0, scattered: false },
    B: { x: 0, y: 0, scattered: false },
    C: { x: 0, y: 0, scattered: false }
  })

  const handleHover = (option) => {
    if (!answered) {
      setPositions(prev => ({
        ...prev,
        [option]: {
          x: Math.random() * 600 - 300,
          y: Math.random() * 400 - 200,
          scattered: true
        }
      }))
    }
  }

  const handleCorrectAnswer = () => {
    setAnswered(true)
  }

  return (
    <div className="app-container">
      {answered && <Confetti numberOfPieces={500} recycle={false} />}
      
      {!answered ? (
        <div className="question-container">
          <h1 className="question">Who is the best father in the world?</h1>
          
          <div className="answers">
            <button
              className={`answer-btn ${positions.A.scattered ? 'scattered' : ''}`}
              style={{
                transform: positions.A.scattered 
                  ? `translate(${positions.A.x}px, ${positions.A.y}px)` 
                  : 'translate(0, 0)',
                pointerEvents: positions.A.scattered ? 'none' : 'auto'
              }}
              onMouseEnter={() => handleHover('A')}
            >
              A) Dwayne "The Rock" Johnson
            </button>

            <button
              className={`answer-btn ${positions.B.scattered ? 'scattered' : ''}`}
              style={{
                transform: positions.B.scattered 
                  ? `translate(${positions.B.x}px, ${positions.B.y}px)` 
                  : 'translate(0, 0)',
                pointerEvents: positions.B.scattered ? 'none' : 'auto'
              }}
              onMouseEnter={() => handleHover('B')}
            >
              B) Barack Obama
            </button>

            <button
              className={`answer-btn ${positions.C.scattered ? 'scattered' : ''}`}
              style={{
                transform: positions.C.scattered 
                  ? `translate(${positions.C.x}px, ${positions.C.y}px)` 
                  : 'translate(0, 0)',
                pointerEvents: positions.C.scattered ? 'none' : 'auto'
              }}
              onMouseEnter={() => handleHover('C')}
            >
              C) Anybody Else
            </button>

            <button
              className="answer-btn correct-answer"
              onClick={handleCorrectAnswer}
            >
              D) Me?
            </button>
          </div>
        </div>
      ) : (
        <div className="celebration">
          <h1 className="correct-text">Correct, You Are!</h1>
          <h2 className="birthday-text">Happy Birthday Dad! 🎉</h2>
          <img 
            src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif" 
            alt="Dancing cat"
            className="dancing-cat"
          />
        </div>
      )}
    </div>
  )
}

export default App
