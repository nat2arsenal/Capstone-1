function SendMail() {
  var params = {
    from_name: document.getElementById('sender_name').value,
    email: document.getElementById('sender_email').value,
    subject: document.getElementById('email_subject').value,
    message: document.getElementById('message').value,
  };

  if (
    params.from_name == '' ||
    params.email == '' ||
    params.subject == '' ||
    params.message == ''
  ) {
    alert('Failed, please fill in all forms and resubmit again.');
  } else {
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
}
