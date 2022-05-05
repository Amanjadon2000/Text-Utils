import React,{useState} from "react";

export default function Textform(props) {

    const [text,setText]=useState("");
    const handleUpClick=()=>{
        let  newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase has been enabled","success");
    }
    const handleLowClick=()=>{
        let  newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase has been enabled","success");

    }
    const handleCapitaliseClick=()=>{
        let arr=text.split(" ");
        let newText="";
        arr.map((element)=>{
            newText+=element.charAt(0).toUpperCase()+element.slice(1)+" ";
        })
        setText(newText);
        props.showAlert("Capitalised has been enabled","success");

    }
    const copytext=()=>{
        let textValue=document.getElementById('myBox');
        textValue.select();
        navigator.clipboard.writeText(textValue.value)
        props.showAlert("CopyText has been enabled","success");

    }
    console.log(props.mode);
    // if(props.)
  return (
      <>
    <div className="container my-5">
      <h1 className={props.mode==='light'?"text-black":"text-white"}  >{props.heading}</h1>
      <div className="mb-3">
    
        
        <textarea style={{backgroundColor:(props.mode==='light' || props.modeGreen==='light')?'white':'#2a4c7e',color:props.mode==='light'?'grey':'white'}} className="form-control" id="myBox" value={text} onChange={(e) => setText(e.target.value)} rows="8"> </textarea>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}> Upper case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick}> Lower case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCapitaliseClick}> Capitalise </button>
        <button className="btn btn-primary mx-3 my-3" onClick={copytext}> copy text </button>
        
        
      </div>
    </div>
    <div style={{color:props.mode==='light'?'#272950':'white'}}>
    <div className="container" >
        Your text summary
    </div>
    <p className="container" >
        {text.split(" ").filter((element)=>{return element.length!=0}).length} words and  {text.length} number of characters
        <div>
        {0.2* text.split(" ").filter((element)=>{return element.length!=0}).length} reads
        </div>
    </p>
      <div className="container">
          <h1>PREVIEW</h1>
            {text.length===0?"Enter something int the textbox above to preview it here ":text}
      </div>
    </div>
    
      </>

  );
}
