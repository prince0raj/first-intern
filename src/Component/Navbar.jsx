import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
    return (
        <Contain>
            <Wrap>
                <Left>
                    <Img>
                    <img src="./images/nav_banner.png" alt="" />
                    </Img>
                    <Text>
                        <h3>Raghav Buildtech</h3>
                        <p>Repairs to rennovation</p>
                    </Text>
                </Left>
                <Right>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#test">Testimonials</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </Right>
            </Wrap>
        </Contain>
    )
}

export default Navbar

const Contain=styled.div`
`
const Wrap=styled.div`
display:flex;
align-items:center;
padding:16px 0;
justify-content:space-between;
margin: 0 auto;
width:80vw;
@media (max-width:850px){
    width:90vw;
}
`
const Left=styled.div`
display:flex;
align-items:center;
gap:10px;
`
const Img=styled.div`
width: 46px;
height: 47.02px;
  img{
    width:100%;
  }

`
const Right=styled.div`
display:flex;
align-items:center;
gap:35px;
li a{
    font-weight: 400;
    font-size:18px;
    color: #00215B;
}
@media (max-width:850px){
    gap:30px;
   li a{
    font-size:17px;
   }
}
`
const Text=styled.div`
line-height:22px;
h3{
font-weight: 500;
font-size: 25px;
}
p{
font-weight: 400;
font-size: 17px;
}
@media (max-width:850px){
    h3{
        font-size: 24px;
    }
    p{
        font-size: 16.5px;
    }
}

`