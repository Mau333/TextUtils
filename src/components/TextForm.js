import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState('Your Text');
    
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
       const ntext=text.toUpperCase();
       setText(ntext);
    }

    const handleLoClick=()=>{
// console.log("Uppercase was clicked"+text);
       const ntext=text.toLowerCase();
       setText(ntext);
    }
    const handleClrClick=()=>{
        const ntext='';
       setText(ntext);
    }
    const handleRemoveSpaces=()=>{
        const ntext=text.split(/[  ]+/);
       setText(ntext.join(' '));
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!","success");
    }
    const handleOnChange=(event)=>{
        //console.log("Uppercase was clicked");
        setText(event.target.value);
    }


  return (
    <>
    <div className={`text-${props.mode==='dark'?'white':'black'}`}>
        <h1>Enter Text Here</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="emyform" rows="6"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Uppercase</button>

        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClrClick}>Clear All</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        
    </div>
    <div className={` container my-3 text-${props.mode==='dark'?'white':'black'}`}>
        <h1>Text summary</h1>
        <p>Wordcount : {text.split(/\s+/).filter((ele)=>{return ele.length>0}).length} , Character Count : {text.length}</p>
        <h2 className='my-3'>Preview</h2>
        <h3>{text}</h3>
    </div>
    </>
  )
}
