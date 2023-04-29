(function () {
  [...document.querySelectorAll('.control')].forEach((button) => {
    button.addEventListener('click', function () {
      document.querySelector('.active-btn').classList.remove('active-btn');
      this.classList.add('active-btn');
      document.querySelector('.active').classList.remove('active');
      document.getElementById(button.dataset.id).classList.add('active');
    });
  });
  document.querySelector('.theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
})();

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
