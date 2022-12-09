import React from 'react'
import styled from 'styled-components'
const Home = () => {
    return (
        <Contain id='Home'>
            <Wrap>
                <h1>One Step Solution <span>for everyone</span></h1>
            </Wrap>
        </Contain>
    )
}

export default Home

const Contain = styled.div`
width: 100%;
height: 738px;
background:black;
position:relative;
&:before{
    background:url('./images/office-building-from-low-angle-view-5JP662U (1).png');
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    background-position:center;
    background-size:cover;
    z-index:1;  
    height: 738px;  
    opacity:0.8;
}
`
const Wrap = styled.div`
position:relative;
width: 801px;
height: 406px;
z-index:10;
h1{
font-weight: 600;
font-size: 74px;
color:white;
line-height: 84px;
padding-top:160px;
padding-left:150px;
span{
    font-weight: 400;
}
}
`
