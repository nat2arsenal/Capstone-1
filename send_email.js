function SendMail() {
  var params = {
    from_name: document.getElementById('sender_name').value,
    email: document.getElementById('sender_email').value,
    subject: document.getElementById('email_subject').value,
    message: document.getElementById('message').value,
  };
  emailjs
    .send('service_iqd2onr', 'template_8s4wkpa', params)
    .then(function (res) {
      alert('Success with status code ' + res.status);
      document.getElementById('sender_name').value = '';
      document.getElementById('sender_email').value = '';
      document.getElementById('email_subject').value = '';
      document.getElementById('message').value = '';
    });
}
