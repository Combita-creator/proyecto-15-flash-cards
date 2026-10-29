import { useState } from 'react';
import { FlashCard } from './FlashCard';
import './App.css';

const cards = [
    {
        question: "¿Cuál es la diferencia entre var, let y const?",
        answer: "En JavaScript, var tiene alcance de función y se puede volver a declarar; let y const tienen alcance de bloque, permitiendo let la reasignación y preveniéndola const. Sin embargo, los objetos creados con const sí pueden modificar sus propiedades internas."
    },
    {
        question: "¿Qué es un closure en JavaScript?",
        answer: "Un closure es la combinación de una función empaquetada junto con referencias a su estado circundante (su entorno léxico)."
    },
    {
        question: "¿Cuál es la diferencia entre == y ===?",
        answer: "== compara valores realizando conversión de tipos (coerción), mientras que === compara tanto el valor como el tipo de forma estricta sin conversión."
    },
    {
        question: "¿Qué es el Event Bubbling (burbujeo de eventos)?",
        answer: "Es la propagación de eventos en el DOM donde un evento se dispara primero en el elemento más interno (objetivo) y luego se propaga sucesivamente hacia sus elementos ancestros."
    }
];

export function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const totalCards = cards.length;
    const currentCard = cards[currentIndex];
    const progressPercent = Math.round(((currentIndex + 1) / totalCards) * 100);

    return (
        <div className="container">
            <h2 className="title">Flash Cards</h2>

            <div className="progress-container">
                <div className="progress-track">
                    <div
                        className="progress-fill"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
                <span className="counter-text">
                    {currentIndex + 1} of {totalCards}
                </span>
            </div>

            <FlashCard card={currentCard} showAnswer={showAnswer} />

            <div className="controls">
                <button
                    className={`btn-link ${currentIndex === 0 ? 'hidden' : ''}`}
                    onClick={() => {
                        if (currentIndex > 0) {
                            setCurrentIndex(currentIndex - 1);
                            setShowAnswer(false);
                        }
                    }}
                >
                    &lt; anterior
                </button>

                <button
                    className="btn-link toggle"
                    onClick={() => setShowAnswer(!showAnswer)}
                >
                    {showAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                </button>

                <button
                    className={`btn-link ${currentIndex === totalCards - 1 ? 'hidden' : ''}`}
                    onClick={() => {
                        if (currentIndex < totalCards - 1) {
                            setCurrentIndex(currentIndex + 1);
                            setShowAnswer(false);
                        }
                    }}
                >
                    siguiente &gt;
                </button>
            </div>
        </div>
    );
}

export default App;