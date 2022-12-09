import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const Contact = () => {
    const [state, setstate] = useState(false)
    const setval=()=>{
        setstate(!state);
    }
    return (
        <div>
            <Box id='contact'>
                <Contain>
                    <Wrap>
                        <h2>Are you looking for Construction
                            & Industrial experts ?</h2>
                        <button onClick={setval}>Contact Us <img src="./images/left_arrow.png" alt="" /></button>
                    </Wrap>
                </Contain>
                <Cont show={state}>
                    <Wrap1>
                        <F1>
                            <input type="text" placeholder='Your Full Name' />
                            <input type="email" placeholder='Your Email Address' />
                        </F1>
                        <F2>
                            <input type="phone" placeholder='Your Phone Number' />
                            <input type="text" placeholder='Your Address' />
                        </F2>
                        <textarea name="" id="" cols="7" rows="4" placeholder='Enter Your Message Here...'></textarea>
                        <Button>
                            <button>Submit Message <img src="./images/left_arrow.png" alt="" /></button>
                        </Button>
                    </Wrap1>
                </Cont>
            </Box>
        </div>
    )
}

export default Contact
const Box = styled.div`
margin:120px 0;
`
const Button = styled.div`
button{
    cursor:pointer;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #FFFFFF;
    padding:11px 50px;
    background: #D2153D;
    border:none;
    border-radius:2px;
 }
`
const Cont = styled.div`
display:${(prop)=>prop.show?'block':'none'}
`
const F1 = styled.div`
display:flex;
justify-content:space-between;
width:100%;
gap:20px;
`
const F2 = styled(F1)`

`
const Wrap1 = styled.div`
width:80vw;
margin:0 auto;
display:flex;
flex-direction:column;

gap:35px;
input{
background: #FFFFFF;
box-shadow: 0px 4px 15px rgba(124, 124, 124, 0.14);
border-radius: 8px;
border:none;
padding:18px;
width:45%;
font-weight: 300;
font-size: 16px;
line-height: 37px;
color: rgba(0, 0, 0, 0.5);
}
textarea{
    padding:18px;
    width:97%;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(124, 124, 124, 0.14);
    border-radius: 8px;
    border:none;
    font-weight: 300;
font-size: 16px;
line-height: 37px;
color: rgba(0, 0, 0, 0.5);
}
`
const Wrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:80vw;
margin:0 auto;
h2{
font-weight: 600;
font-size: 55px;
line-height: 64px;
color: #16213E;
width:70%;
}
button{
    cursor:pointer;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #FFFFFF;
    padding:11px 60px;
    background: #D2153D;
    border:none;
    border-radius:2px;
 }
`
const Contain = styled.div`
background:url('./images/contact.png');
background-position:center;
height: 390px;
display:flex;
align-items:center;
background-size: cover;
background-repeat: no-repeat;
margin-top:200px;
margin-bottom:120px;
`
