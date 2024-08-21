function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        const chatBox = document.getElementById('chat-box');
        
        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = messageText;
        
        // Append the message to the chat box
        chatBox.appendChild(messageElement);
        
        // Clear the input field
        messageInput.value = '';
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Optional: Allow pressing "Enter" to send messages
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});
