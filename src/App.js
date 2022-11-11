
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import React, {useState} from 'react';












function App() {

const [alert, setAlert] = useState(null)

const showAlert = (message,type) =>
{

  setAlert
  ({
      msg: message,
      type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000)

}


const [mode, setMode] = useState('light')

const toggleMode = () =>
{
  if (mode === 'dark'){
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enable","success");
  }
  else{
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enable","success");
  }
}

  return (
    <>


<Navbar title="TextUtil"  toggleMode={toggleMode} mode={mode} about="About" Home="Home"></Navbar>
<Alert alert={alert}></Alert>
<Navbar ></Navbar>
<div className="container" >
<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}></TextForm>
{/* <About></About> */}
</div>


    </>
  );
}

export default App;
