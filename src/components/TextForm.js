import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase.","success")
    }


    // const handleClearClick = () =>{
    //     let newText = '';
    //     setText(newText)
    // }

//   const [Clear, setClear]= useState("Clear Text")

  const handleClearClick = () =>
  {
    let newText = '';
    setText(newText)
    
    
    
  }
  



    const handleOnChange = (e) =>{
        setText(e.target.value);
    }


    const[text,setText] = useState('');


    const handleLoClick = ()=>{

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase.","success")

    }

    const handleCopy = ()=>{

        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);

        
        props.showAlert("Text has been copied.","success")
        
    }
    
    const handleRemove = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>


        <div className="mb-3 my-3">
            <h2>{props.heading}</h2>
                <textarea className="form-control" style={{backgroundColor : props.mode === 'dark'?'white' : '#042743', color: props.mode === 'dark'?'black':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemove}>Remove extra Spaces</button>

    </div>

    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split("").length} Words  and  {text.length} characters</p>
        <p>You can able to read this in {0.008*text.split(" ").length} min.</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in above textbox to preview it here. "}</p>
    </div>

    </>
  )
}
TextForm.defaultProps = {
    heading: 'string'
  };