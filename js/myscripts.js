const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', e => {
    let messages = []
    if (messages.value.length >= 300) {
        message.push('Message must be shorter than 300 characters')

    }

})

