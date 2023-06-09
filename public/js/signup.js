const newUserForm = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#signup-username');
  const emailEl = document.querySelector('#signup-email');
  const passwordEl = document.querySelector('#signup-password');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/feed');
  } else {
    alert('Failed to sign up');
  }
};


document
  .querySelector('#signup-form')
  .addEventListener('submit', newUserForm);
