import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const namee = useRef();
  const [signInMessage, setSignInMessage] = useState('');

  function signin() {
    const newName = document.getElementById('name').value;
    const pass = document.getElementById('pass').value;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    for (let i = 0; i < pass.length; i++) {
      const char = pass.charAt(i);
      if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      } else if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (char >= '0' && char <= '9') {
        hasDigit = true;
      }
    }

    if (hasUppercase && hasLowercase && hasDigit && pass.length >= 8) {
      setSignInMessage(`Sign In successful!!! Welcome ${newName}. Learn More with Bigstorm`);
    } else {
      setSignInMessage(
        'Please enter a valid password (password should be of minimum 8 characters having at least 1 small letter (a-z), 1 capital letter (A-Z), 1 digit (0-9), 1 special character)'
      );
    }
  }

  return (
    <div className="App">
      <h1>BIG STORM</h1>
      <br></br>
      <h3>Educational website</h3>
      <p>Sign In and Shine</p>
      <form>
        <label>
          Enter your Name:
          <input id='name' type="text" />
        </label>
      </form>
      <form>
        <label>
          email:
          <input id='email' type="text" />
        </label>
      </form>
      <form>
        <label>
          password:
          <input id='pass' type="password" />
        </label>
      </form>
      <button onClick={signin}>Sign in to continue</button>
      <p id="newDemo">{signInMessage}</p>
    </div>
  );
}

export default App;
