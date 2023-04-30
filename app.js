(function () {
  // CONTROLS JS CODE
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
  // END OF CONTROLS JS CODE

  // CONTACT EMAIL JS CODE
  emailjs.init('b1DAx0s1chMoisREM');

  document.querySelector('#button').addEventListener('click', () => {
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
      alert('Failed, please fill in all forms and click send again.');
    } else {
      emailjs
        .send('service_iqd2onr', 'template_8s4wkpa', params)
        .then(function (res) {
          if (res.status === 200) {
            alert(
              'Email Sent Successfully!\n\nThank you and have a great day! '
            );
            document.getElementById('sender_name').value = '';
            document.getElementById('sender_email').value = '';
            document.getElementById('email_subject').value = '';
            document.getElementById('message').value = '';
          } else {
            alert(
              'Sorry there was an error with status code' +
                res.status +
                '\nPlease try again.'
            );
          }
        });
    }
  });
  // END OF CONTACT EMAIL JS CODE
})();
