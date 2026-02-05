import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [answered, setAnswered] = useState(false)
  const [positions, setPositions] = useState({
    A: { x: 0, y: 0, scattered: false },
    B: { x: 0, y: 0, scattered: false },
    C: { x: 0, y: 0, scattered: false }
  })

  // Jamaican flag colors for confetti
  const confettiColors = ['#009B3A', '#FED100', '#000000']

  useEffect(() => {
    if (answered) {
      // Play celebration sound
      const celebrationSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3')
      celebrationSound.volume = 0.5
      celebrationSound.play().catch(err => console.log('Audio play failed:', err))

      // Play reggae music after a short delay
      setTimeout(() => {
        const reggaeMusic = new Audio('https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3')
        reggaeMusic.volume = 0.3
        reggaeMusic.loop = true
        reggaeMusic.play().catch(err => console.log('Music play failed:', err))
      }, 1000)
    }
  }, [answered])

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
      {answered && (
        <Confetti 
          numberOfPieces={500} 
          recycle={false}
          colors={confettiColors}
        />
      )}
      
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
          <div className="jamaica-celebration">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2dvdm1mbGRieTQ3MWwzd2tkcHpjeGNwYXVjbXR0OGgxMHVjbGJjaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LGBKlgMCKQbkDKcG4t/giphy.gif" 
              alt="Happy Birthday"
              className="celebration-gif"
            />
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d2ZtYjhneXdrMm4xODlheGptaG5tODRudW9za3g3NDZudHN4Ymo2eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UmfIdBpyFlKhr6BM93/giphy.gif" 
              alt="Jamaica"
              className="celebration-gif"
            />
          </div>
          <div className="jamaica-flag"></div>
        </div>
      )}
    </div>
  )
}

export default App
