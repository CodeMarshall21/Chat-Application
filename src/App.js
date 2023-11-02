// import logo from './logo.svg';
import { useState, useRef } from 'react';
import './App.css';
import Auth from './components/Auth.js'
import Cookie from 'universal-cookie'
const cookies = new Cookie();

function App() {
  const [isAuth, setIsAuth] = useState (cookies.get('auth-token'));
  const [room, setRoom] = useState (null);
  const roomInputRef = useRef(null);

  if (!isAuth){
    return (
      <div className="App">
        <Auth setIsAuth = {setIsAuth}/>      
      </div>
    );
  }

  return(
    <div className="App">
      {room ? (
      <div>Chat</div>
      ) : (
        <div>
          <label>Enter Room Name: </label><br/><br/>
          <input ref = {roomInputRef}/><br/><br/>
          <button onClick={() => setRoom(roomInputRef.current.value)}>Send</button>
        </div>
      )}
    </div>
  );
  

}

export default App;
