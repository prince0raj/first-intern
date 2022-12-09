import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useState } from 'react'
const Services = () => {
    const [yes,setyes]=useState(false);
    const setval=()=>{
        setyes(!yes);
        // console.log(yes);
    }
    return (
        <Contain id='services'>
            <Wrap>
                <Head>
                    <h4>Our Works</h4>
                    <h2>Services</h2>
                </Head>
                <Lockbox>
                    <Box>
                        <Card img='./images/card1.png' tittle='Electrical' dec='There are many variations of passages of lorem Ipsum available.' />
                        <Card img='./images/card2.png' tittle='Plumbing' dec='There are many variations of passages of loremIpsum available.' />
                        <Card img='./images/card3.png' tittle='Title Settlers' dec='There are many variations of passages of loremIpsum available.' />
                    </Box>
                    <Box1 show={yes}>
                        <Card img='./images/card4.png' tittle='Painting' dec='There are many variations of passages of lorem Ipsum available.' />
                        <Card img='./images/card5.png' tittle='CCTV installation' dec='There are many variations of passages of loremIpsum available.' />
                        <Card img='./images/card6.png' tittle='Construction of house' dec='There are many variations of passages of loremIpsum available.' />
                        <Card img='./images/card7.png' tittle='Firm alarm sensors' dec='There are many variations of passages of loremIpsum available.' />
                    </Box1>
                </Lockbox>
                <Button> 
                    <button onClick={setval}>Show {yes?'Less':'More'}</button>
                </Button>
            </Wrap>
        </Contain>
    )
}

export default Services

const Contain = styled.div`
margin-top:100px;
`
const Wrap = styled.div`
width:80vw;
margin:0 auto;
display:flex;
flex-direction:column;
gap:40px;
`
const Head = styled.div`
margin:20px 0;
h4{
    font-weight: 500;
font-size: 14px;
line-height: 15px;
text-align: center;
text-transform: uppercase;
color: #D2153D;
}
h2{
font-weight: 600;
font-size: 55px;
line-height: 64px;
text-align: center;
color: #16213E;
}
`
const Box = styled.div`
display:flex;
align-items:center;
gap:48px;
flex-wrap:wrap;
justify-content:center;
`
const Box1 = styled(Box)`
display:${(prop)=>prop.show?'flex':'none'};
`
const Lockbox = styled.div`
display:flex;
flex-direction:column;
gap:40px;
`
const Button=styled.div`
 display:flex;
 justify-content:center;
 margin:20px 0;
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