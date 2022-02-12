console.log('TESTING CONNECTION');

const signoutButton = document.querySelector('#signoutButton');

const signOut = async function() {
    const response = await fetch('/api/user/sign-out', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
  };
  
signoutButton.addEventListener("submit", signOut);