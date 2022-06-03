const room = window.location.pathname.replace(/\//g, '');
console.log(room);
const socket = io(`http://192.168.4.58:4002/${room}`);
let user = null;

socket.on('update_messages', (messages) => {

    updateMessagesOnScreen(messages);
})

function updateMessagesOnScreen(messages) {
    const div_messages = document.querySelector('#messages')

    let list_messages = '<ul>';
    messages.forEach(message => {
        list_messages += `<li>${message.user}: ${message.msg}</li>`
    });
    list_messages += '</ul>'

    div_messages.innerHTML = list_messages
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#msg_form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!user) {
            alert('Defina um usuário');
            return
        }

        const message = document.forms['msg_form_name']['msg'].value;
        document.forms['msg_form_name']['msg'].value = '';
        socket.emit('new_message', { user: user, msg: message })
        console.log(message)
    })

    const userForm = document.querySelector('#user_form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        user = document.forms['user_form_name']['user'].value;
        userForm.parentNode.removeChild(userForm);


    })
})