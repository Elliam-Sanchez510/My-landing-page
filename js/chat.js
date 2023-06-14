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
    if (event.keyCode === 13) {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        appendMessage('user', userMessage);
        // Aquí puedes agregar la lógica para procesar la respuesta del chatbot y llamar a una API, por ejemplo
        // Luego, obtén la respuesta del chatbot y llamar a la función appendMessage con el mensaje del chatbot
        userInput.value = '';
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
