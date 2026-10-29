export function FlashCard({ card, showAnswer }) {
    return (
        <div className="flashcard">
            <p className={`card-text ${!showAnswer ? 'bold' : ''}`}>
                {showAnswer ? card.answer : card.question}
            </p>
        </div>
    );
}