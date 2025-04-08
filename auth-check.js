// auth-check.js
// Check if the user is authenticated
if (!sessionStorage.getItem('authenticated')) {
    // If not authenticated, redirect back to landing page
    window.location.href = 'index.html';
}
