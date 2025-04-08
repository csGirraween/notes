// script.js
function verifyAnswer() {
    const answer = document.getElementById('answer-input').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    // Case-insensitive comparison with the correct answer
    if (answer.toLowerCase() === 'bob') {
        // Store authentication in session storage
        sessionStorage.setItem('authenticated', 'true');
        // Redirect to writing tips page
        window.location.href = 'writing-tips.html';
    } else {
        errorMessage.classList.remove('hidden');
    }
}
