import React from "react";

export default function Alert(props) {
    const capitalised=()=>{
        let txt=props.alert.type;
        return txt.charAt(0).toUpperCase()+txt.slice(1);
    }
  return (
    <div style={{height:'20px'}}>
     { props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
       <strong>{capitalised(props.alert.type)}</strong> :<strong>{props.alert.msg}</strong>
     
      </div>
}
    </div>
    
   
  );
}
