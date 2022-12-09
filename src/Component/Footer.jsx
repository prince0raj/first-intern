import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <Contain>
            <First>
                <Wrap1>
                    <Logo>
                        <Img>
                            <img src="./images/nav_banner.png" alt="" />
                        </Img>
                        <Text>
                            <h3>Raghav Buildtech</h3>
                            <p>Repairs to rennovation</p>
                        </Text>
                    </Logo>
                    <Numbe>
                        <p>Call Us Today</p>
                        <h3>+91 8754502338</h3>
                    </Numbe>
                    <Social>
                        <Img1>
                            <img src="./images/Facebook.png" alt="" />
                        </Img1>
                        <Img1>
                            <img src="./images/Linkedin.png" alt="" />
                        </Img1>
                        <Img1>
                            <img src="./images/Twitter.png" alt="" />
                        </Img1>
                        <Img1>
                            <img src="./images/Youtube.png" alt="" />
                        </Img1>
                    </Social>

                </Wrap1>
            </First>
            <Second>
                <Wrap2>
                    <Top>
                        <Left>
                            <h5>Quick Links</h5>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#test">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </Left>
                        <Right>
                            <h5>Office Address</h5>
                            <p>#173, Ragini, 2A Main Road,
                                Block 7, Nagarabhavi 2nd Stage,  Bangalore - 560072</p>
                            <p>ragainn@gmail.com</p>
                        </Right>
                    </Top>
                    <Bottom>
                        <p>Site Map</p>
                        <p>@2022 copyright raghavbuildtech</p>
                    </Bottom>
                </Wrap2>
            </Second>
        </Contain>
    )
}

export default Footer;
const Contain = styled.div`
display:flex;
width:100%;
margin-bottom:250px;
`
const Bottom = styled.div`
display:flex;
gap:20px;
p{
font-weight: 200;
color:white;
font-size: 15px;
}
`
const Wrap2 = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
padding: 6vw;
`
const Img1 = styled.div`
width:34px;
img{
    width:100%;
}
`
const Top = styled.div`
display:flex;
justify-content:center;
gap:130px;
`
const Wrap1 = styled.div`
display:flex;
align-items:start;
justify-content:center;
gap:27px;
flex-direction:column;
`
const Right = styled.div`
      display:flex;
      flex-direction:column;
      gap:10px;
    h5{
        font-weight: 400;
        font-size: 17px;
        line-height: 26px;
        color:white;
        margin-bottom:10px;
        }
p{
font-weight: 300;
font-size: 15px;
line-height: 26px;
color: #D4D7DD;
}
`
const Left = styled.div`
display:flex;
flex-direction:column;
gap:10px;
h5{
font-weight: 400;
font-size: 17px;
line-height: 26px;
color:white;
}
li a{
color:white;
font-weight: 400;
font-size: 17px;
line-height: 26px;
}
`
const Second = styled.div`
width:50%;
padding-right:10vw;
background: #00215B;
display:flex;
justify-content:center;
`
const First = styled.div`
 width:50%;
 background: #D2153D;
 display:flex;
 align-items:center;;
 padding-left: 10vw;
`
const Social = styled.div`
display:flex;
align-items:center;
gap:20px;
`
const Numbe = styled.div`
line-height:29px;
h3{
font-weight: 500;
font-size: 25px;
color:white;
}
p{
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #EBECEE;
}
`
const Logo = styled.div`
display:flex;
align-items:center;
gap:10px;
margin-bottom:10px
`
const Img = styled.div`
width: 46px;
height: 47.02px;
  img{
    width:100%;
  }

`
const Text = styled.div`
line-height:22px;
h3{
font-weight: 500;
font-size: 25px;
color:white;
}
p{
    color:white; 
font-weight: 400;
font-size: 17px;
}
`