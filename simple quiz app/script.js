function checkAnswer(choice) {
    const correctAnswer = 'C'; // The correct answer for the quiz
    const result = document.getElementById('result');

    if (choice === correctAnswer) {
        result.textContent = 'Correct! The capital of France is Paris.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect. Try again!';
        result.style.color = 'red';
    }
}
