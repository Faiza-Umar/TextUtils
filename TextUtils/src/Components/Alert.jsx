
import React from 'react';


export default function Alert(props) {

      const capitalize = (word) => {
        const lower = word.toLowerCase();
         return lower.charAt(0).toUpperCase() + lower.slice(1);
      }



  return (
    <div>
      
    { props.alertTxt &&  <div class={`alert alert-${props.alertTxt.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alertTxt.type)}</strong>: {props.alertTxt.msg}
  
        </div>}



    </div>
  )
}
