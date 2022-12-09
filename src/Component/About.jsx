import React from 'react'
import styled from 'styled-components'
const About = () => {
    return (
        <Conatin id='about'>
            <Wrap>
                <Left>
                    <Tittle><p>ABOUT US</p></Tittle>
                    <Context>
                        <h1>With our work we guarante success</h1>
                        <h6>Capt Raghavan, with 34 years of experience</h6>
                        <p> Capt Raghavan, with 34 years of experience in commercial business, including 12 years in the Healthcare industry, is venturing into Raghav Buildtech. In addition to extensive Pan India exposure to Radiology and Pathology, the founder has also successfully established himself as CEO of Magnolia Community Health Pvt Ltd He has generated company growth as a business leader with experience in Project and management, Healthcare Services, medical device maintenance, P&L management, sales, marketing, and business development. Along with core academic credentials of M.Tech from IIT Kharagpur and BTech from NIT Warangal, he also holds a professional postgraduate level diploma course in Business Management and certifications in Defense Management and Industrial Project Management.</p>
                    </Context>
                </Left>
                <Right>
                    <Img1 src='./images/young-female-construction-specialist-engineer-revi-8DFXZ4A.png'></Img1>
                    <Img2 src='./images/road-construction-in-himalayas-QDEHVB2 (1).png'></Img2>
                </Right>
            </Wrap>
        </Conatin>
    )
}

export default About

const Conatin = styled.div`
margin-top:110px;
`
const Wrap = styled.div`
width:80vw;
margin:0 auto;
display:flex;
align-items:center;
justify-content:space-between;
`
const Left = styled.div`
width: 608px;
`
const Right = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
const Tittle = styled.div`
p{
 color: #D2153D;
font-weight: 500;
font-size: 14px;
}
`
const Context = styled.div`
h1{
    font-weight: 600;
font-size: 55px;
line-height: 64px;
color: #16213E;
padding:10px 0;
}
h6{
    font-family: 'Lato', sans-serif;
    font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #00215B;
padding:10px 0;
}
p{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: #41444B;
    padding:10px 0;
}
`
const Img1 = styled.img`
width: 350px;
height: 357px;
transform: translate(0px, 50px);
`
const Img2 = styled.img`
transform: translate(-150px, -100px);
width: 270px;
height: 357px;
`