let correctPassword = "";

async function fetchPassword() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/abekomi/7173b81c53a0ba3913fdeaaa73086fb4/raw/48cdfcc16e882bf3efa58c0c48a86ccc6cc9f874/gistfile1.txt'); // Use your Gist raw URL
    const data = await response.json();
    correctPassword = data.password;
  } catch (error) {
    console.error('Error fetching password:', error);
  }
}

async function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');
  await fetchPassword(); // Ensure password is fetched here
  if (passwordInput === correctPassword) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('matrix-container').style.display = 'block';
  } else {
    errorMsg.textContent = 'Incorrect password. Please try again.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchPassword(); // Initial fetch to have the password ready
});


fetchPassword(); // Fetch the password when the script loads
