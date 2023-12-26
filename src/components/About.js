import React from 'react'
// import { useState } from 'react'

// import "E:/REACT COURSE/textutils/src/styles/aboutStyle.css"

export default function About(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color: 'black ',
    //     backgroundColor: 'white',

    // let myStyle = {
    //     color: props.mode === "dark" ? "white" : 'black',
    //     backgroundColor: props.mdode === 'dark' ? '#343434' : 'white'
    // }
    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="accordion container p-3" id="accordionExample" style={{ backgroundColor: props.mode === "dark" ? "#192d49" : "white" }}  >
                <h2 className='my-3'>About Us</h2>
                <div className="accordion-item"   >
                    <h2 className="accordion-header" >
                        <button style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "White" : "black" }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>
                                About TextUtils
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === "dark" ? "#343434" : "white", color: props.mode === "dark" ? "White" : "black" }}>
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit.</strong>  Voluptates aliquid fugit quidem perspiciatis consectetur velit nesciunt tenetur odit earum, veritatis <code>maxime nulla.</code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'White' : 'black' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Features </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#343434' : 'white' }}>
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit.</strong>  Voluptates aliquid fugit quidem perspiciatis consectetur velit nesciunt tenetur odit earum, veritatis <code>maxime nulla.</code>

                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>
                                Donate a Coffee Jug  <code> :)</code>
                            </strong>
                        </button>
                    </h2>
                    <div style={{ backgroundColor: props.mode === 'dark' ? '#343434' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit.</strong>  Voluptates aliquid fugit quidem perspiciatis consectetur velit nesciunt tenetur odit earum, veritatis <code>maxime nulla.</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
