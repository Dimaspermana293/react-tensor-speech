import React, {useEffect,useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
// 1. Import dependencies DONE
import * as tf from '@tensorflow/tfjs';
import * as speech from '@tensorflow-models/speech-commands';

const App = () => {
  // 2. Create model and action states DONE
  const [model, setModel] =useState(null);
  const [action, setAction] =useState(null);
  const [labels, setLabels] =useState(null);
  
  // 3. Create recognizer
  const loadModel = async () => {
    const recognizer = await speech.create("BROWSER_FFT");
    console.log("Model Loaded");
    await recognizer.ensureModelLoaded()
    console.log(recognizer.wordLabels())
  }
  useEffect(() => {loadModel()}, []);
  // 4. Listen for action
  // 5. Display command to the screen

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <button className=''></button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
