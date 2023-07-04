const chatbotContainer = document.getElementById('chatbot-container');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotCloseButton = document.getElementById('chatbot-close-button');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.style.display = 'block';
    chatbotToggle.style.display = 'none';
});

chatbotCloseButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
    chatbotToggle.style.display = 'block';
});

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        appendMessage('user', userMessage);
        userInput.value = '';

        // Enviar la consulta al servidor de FastAPI
        sendQueryToChatbot(userMessage);
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendQueryToChatbot(query) {
    const url = "http://localhost:8000/send-query/";
    const data = { query: query };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            const chatbotResponse = data.chatbot_response;
            appendMessage('chatbot', chatbotResponse);
        })
        .catch(error => {
            console.error('Error al enviar la consulta al chatbot:', error);
        });
}
