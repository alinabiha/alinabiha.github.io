function sendEmail() {
    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_1ti0cai', 'template_b89v8uc', params).then(alert('Message Sent Successfully!!!'));
}