import { useState } from "react"
import React from 'react';


function Textforms (props){
    
   const convertUpperCase = () => {
       // console.log("button clicked by user"+ Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!", "success");
    }

     const convertLowerCase = () => {
       // console.log("button clicked by user"+ Text);
        let newText = Text.toLowerCase();
        setText(newText);
         props.showAlert("Converted to lowerCase!", "success");
    }

     const Cleartext = () => {
        let newText = '' ;
        setText(newText);
         props.showAlert("Text cleared!", "success");
    }

     const handleOnChange = (event) => {
       // console.log("change");
        setText(event.target.value);
    }

     const CopyText = () => {

        let text = document.getElementById("myBox");
       text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
         props.showAlert("Copied to clipboard!", "success");
     }

     const removeExtraSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(' '));
         props.showAlert("Extra spaces removed!", "success");
     }



    const[Text, setText] = useState('');

    return(
        <>
        <div className="container"  >
        <div className="mb-3" style={{color: props.mode === 'dark'? 'white':'black'}} >
            <h1  > {props.Heading}  </h1>
  
  <textarea className="form-control" value={Text}  style={{backgroundColor: props.mode === 'dark'? 'grey': 'white',color: props.mode === 'dark'? 'white':'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea><br/>

  <button className="btn btn-primary mx-2" onClick={convertUpperCase} >Convert to Uppercase</button>

  <button className="btn btn-primary mx-2"onClick={convertLowerCase} >Convert to Lowercase</button>
  
   <button className="btn btn-primary mx-2" onClick={CopyText}> Copy Text </button>

   <button className="btn btn-primary mx-2"onClick={removeExtraSpaces} >Remove Extra Spaces
   </button>
  
  <button className="btn btn-primary mx-2" onClick={Cleartext} >Clear Text</button>

</div>
</div>

      <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}  >
        <h2>
            Your Text Counter
        </h2>
      
            <p>{Text.trim().split(/\s+/).filter(Boolean).length} words and {Text.length} characters</p>

           <p> {0.008 * Text.split(" ").length} minutes read</p><br/>

            <h3>Preview</h3>

           <p>{Text.length>0 ? Text:"Enter something in the textbox above to preview it here" }</p>


      </div>



</>
    )
}
export default Textforms