import React,{useState} from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import App from "../App";


function TextForm(props) {
    const [text, setText] = useState("");
    const [count , setCount]=useState('');
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
   
    
    console.log(props.mode);
  
    

    const handleUpperClick=()=>{
        console.log("clicked");
        setText(text.toUpperCase())
        props.showMessage("Converted in Upper Case","success");
        
    }

    const handleLowerClick=()=>{
      console.log("clicked");
      setText(text.toLowerCase())
      props.showMessage("Converted in Lower Case","success");
      
  }

    const handleOnChange=(event)=>{
      setText(event.target.value)
      setCount(event.target.value);
      setValue(event.target.value);
     
  }

  const handleClearClick=()=>{
    setText("")
    props.showMessage("Text cleared","success");
  }

  const onClickDownload=()=>{
    const element = document.createElement("a");
   const file = new Blob([document.getElementById('myBox').value],    
               {type: 'text/plain;charset=utf-8'});
   element.href = URL.createObjectURL(file);
   element.download = "myFile.txt";
   document.body.appendChild(element);
   element.click();
   props.showMessage("File has been downloaded","success");
  }
    
  const countWords = () => {
    // Split the text by spaces to count the words
    const words = text.trim().split(/\s+/);
    // Remove empty strings from the array (e.g., due to multiple consecutive spaces)
    const nonEmptyWords = words.filter((word) => word !== '');
    return nonEmptyWords.length;
  };
  return (
    <>
      <div >
        <div className={`mb-3`} style={{color:props.mode==='dark'?'white':'black'}} >
          <h4>{props.heading}</h4>
          

          <textarea  className="form-control" style={{backgroundColor:props.mode==='dark'?'#3A3B3C':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="3" value={text}onChange={handleOnChange} placeholder="Enter your text here" ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert in Upper Case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert in Lower Case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button type="button" className="btn btn-primary mx-2" onClick={() => speak({ text: text })}>Speak</button>
        <button type="button" className="btn btn-primary mx-2" onClick={onClickDownload}>Download</button>
        
      </div>

      <div className={'container my-3 text-${props.lbText}'}>
       <div style={{color:props.mode==='dark'?'white':'black'}}>
       <h5 > Here is your Text Summery</h5>
        <p>You have <b style={{ color: 'red' }}>{countWords()}</b> words & <b style={{ color: 'red' }}>{text.length}</b> charecter</p>

        <p> {0.008*text.split(" ").length} minuts to read</p>
        <h6>Preview</h6>
        <p >{text.length>0?text:"Enter text to preview"}</p>
       </div>
      </div>
    </>
  );
}

export default TextForm;
