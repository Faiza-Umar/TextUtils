import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Textforms from './Components/Textform';
import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import { useFormState } from 'react-dom';
import React from 'react';



function App(props) {
  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
         
    setalert({
      msg: message,
      type: type
    });
       setTimeout(() => {
        setalert(null);
       }, 1000);
  }

   const toggleMode = () => {
       
      if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = '#042734';
        showAlert("dark mode has been enabled successfully", "success");
      }
      else{
          setmode('light');  
          document.body.style.backgroundColor = 'white';
          showAlert("light mode has been enabled successfully", "success");
      }

   }  

  return (
  <>
  

<Navbar name="TextUtils" about="About Us" mode={mode} togglemode={toggleMode} />
  
    <Alert alertTxt={alert}></Alert>

    { <div className='container my-3'>
       <Textforms Heading="Enter Your Text to Analyze"  mode={mode} showAlert={showAlert}/>
    </div>}

    
       { /* <AboutUs/> */ }
     

   </>
  );
}

export default App
