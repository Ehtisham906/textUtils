import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");
    // text="new text";// wrong way to cahnge the state
    // setText("new Text");

    const handelUpperCaseClick = () => {
        // console.log("Upper Case Was Clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To uppercase", "success");
    }
    const handelLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To lowercase", "success");
    }
    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    // const handelTitleFormat = () => {
    //     let str = text;

    //     // Split the string into an array of words
    //     let words = str.split(" ");

    //     // Create a new array with the capitalized first letter and lowercase for the rest of each word
    //     let capitalizedWords = words.map(
    //         (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    //     );

    //     // Join the words to form a sentence
    //     let sentence = capitalizedWords.join(" ");

    //     setText(sentence);

    // }
    // const handelSentenceFormat = () => {
    //     let str = text;

    //     // Split the string into an array of words
    //     let words = str.split(" ");

    //     // Create a new array with the capitalized first letter and lowercase for the rest of each word
    //     let capitalizedWords = words.map(
    //         (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    //     );

    //     // Join the words to form a sentence
    //     let sentence = capitalizedWords.join(" ");

    //     setText(sentence);

    // }
    // const email = () => {
    //     let newText = text
    //     let email = /\b[\w\.-]+@[\w\.-]+\.\w{2,}\b/g;
    //     let extractedEmail = newText.match(email)
    //     alert("Emails found are: " + extractedEmail)
    // }
    const handelCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }
    const handelSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaceses removed", "success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control' value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark' ? '#192d49' : 'white', color:props.mode==="dark"?"white":"black" }} 
                        id="myBox" rows="8"></textarea>
                </div>
                <div className='row justify-content-center'>
                <button className="btn btn-primary mx-2 my-2 " onClick={handelUpperCaseClick}>Convert to uppercase</button>
                    
                <button className="btn btn-primary mx-2 my-2" onClick={handelLowerCaseClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2 " onClick={clearText} >Clear Text</button>
                {/* <button className="btn btn-primary mx-2" onClick={handelTitleFormat} >Title Format</button> */}
                <button className="btn btn-primary mx-2 my-2 " onClick={handelCopy} >Copy Text</button>
                {/* <button className="btn btn-primary mx-2" onClick={handelSentenceFormat} >Sentence Format</button> */}
                <button className="btn btn-primary mx-2  my-2" onClick={handelSpaces} >Remove Unneceasry Spaces</button>
                {/* <button className="btn btn-primary mx-2" onClick={email} >Emial</button> */}
                </div>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h2 >Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes required to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter some text above to preview it here."}</p>
            </div>
        </>
    );
}
TextForm.propTypes = {
    heading: PropTypes.string
}