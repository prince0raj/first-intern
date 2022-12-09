import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
const Popup = () => {
    const [val,setval]=useState(true);
    console.log("first "+ val);
    const gotit=()=>{
        setval(false);
        console.log(val);
    }
    setTimeout(()=>{
       setval(false);
    },5000)
    return (
        <Contain show={val}>
            <Wrap show={val}>
                <Left>
                    <h1>Repairs to <br />
                        Rennovation</h1>
                    <p>Turnkey solution for construction of new projects, repairs to renovations of old
                        buildings, interior designing, exterior beautification, water seepage expertise all
                        under one roof.</p>
                    <Numbe>
                        <p>Call Us Today</p>
                        <h3>+91 8754502338</h3>
                    </Numbe>
                </Left>
                <Right>
                    <img src="./images/vector.png" alt="" />
                </Right>
                <Cut>
                    <button onClick={gotit}>x</button>
                </Cut>
            </Wrap>
        </Contain>
    )
}

export default Popup;
const Cut=styled.div`
position: absolute;
top: 0.5rem;
right: 10.5rem;
button{
    cursor:pointer;
    color: white;
    background: no-repeat;
    border: none;
    font-size: 33px
}
`
const Numbe = styled.div`
line-height:29px;
h3{
font-weight: 500;
font-size: 25px;
color:white;
}
p{
    font-weight: 300 !important;
    font-size: 12px !important;
    line-height: 15px !important;
    text-transform: uppercase !important;
    color: #EBECEE !important;
}
`
const Contain = styled.div`
top: 50%;
left: 0;
bottom: 0;
transform: translateY(-50%);
right: 0;
position: absolute;
z-index: 1000;
visibility:${(prop)=>prop.show?'vissible':'hidden'};
 opacity: ${(prop)=>prop.show?'1':'0'};
 transition: visibility 0.4s, opacity 0.3s ease-in-out;
`
const Wrap = styled.div`
margin:0 auto;
width:70vw;
background: #E33F61;
border-radius: 24px;
align-items: center;
padding:100px;
display:flex;
gap:150px;
postion:relative;
`
const Right = styled.div`
width:155px;
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
gap: 36px;
h1{
    font-weight: 600;
font-size: 55px;
line-height: 64px;
color: #FFFFFF;
}
p{
font-family: 'Lato', sans-serif;
font-weight: 400;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
}

`