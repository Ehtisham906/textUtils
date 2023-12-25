import React, { useState } from 'react'

// import "E:/REACT COURSE/textutils/src/styles/aboutStyle.css"

export default function About() {

   
    const [myStyle, setMyStyle] = useState({
        color: 'black ',
        backgroundColor: 'white',
    
    })

    // const accordian={
    //     // padding:"3px",
    //     border:"4px black solid",
    //     borderRadius:"10px"    
    // }

    const [btnText,setBtnText]=useState("Enable Dark Mode")
    
    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border:"1px solid white"
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            
            setBtnText("Enable Dark Mode")
        }
    }
    
    

    // let classColor = document.getElementsByClassName("accordion-item")
    // for (let i = 0; i < classColor.length; i++) {
    //     classColor[i].style.color="white"
    // }
    // let accordianbtnColor = document.getElementsByClassName("accordion-button")
    // for (let i = 0; i < accordianbtnColor.length; i++) {
    //     accordianbtnColor[i].style.color="white"
    //     accordianbtnColor[i].style.backgroundColor="black"
    // }
    // let accordianbodyColor = document.getElementsByClassName("accordion-body")
    // for (let i = 0; i < accordianbodyColor.length; i++) {
    //     accordianbodyColor[i].style.color="white"
    //     accordianbodyColor[i].style.backgroundColor="black"
    // }
    return (
        <div className='container' >
            <div className="accordion container p-3" id="accordionExample" style={myStyle} >
                <h2 className='my-3'>About Us</h2>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btnText}</button>
            </div>
        </div>
    )
}
