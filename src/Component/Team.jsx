import React from 'react'
import styled from 'styled-components'

const Team = () => {
    return (
        <Contain>
            <Wrap>
                <Head>
                    <h4>Team</h4>
                    <h2>Team Information</h2>
                </Head>
                <Raw>
                    <Left>
                        <img src="./images/team.png" alt="" />
                    </Left>
                    <Right>
                        <h1>Capt. N. Raghavan</h1>
                        <h5>CEO OF RAGHAV BUILDTECH</h5>
                        <p>Capt Raghavan, with 34 years of experience in commercial business,
                            including 12 years in the Healthcare industry, is venturing into Raghav
                            Buildtech. He has core academic credentials of M.Tech from IIT Kharagpur
                            and BTech from NIT Warangal, he also holds a professional postgraduate
                            level diploma course in Business Management and certifications in Defense
                            Management and Industrial Project Management.</p>
                    </Right>
                </Raw>
            </Wrap>
        </Contain>
    )
}

export default Team
const Wrap = styled.div`
width:80vw;
margin:0 auto;
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
const Contain = styled.div`
margin:150px 0;
`
const Raw = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin:100px 0;
`
const Right = styled.div`
display:flex;
width: 549px;
flex-direction:column;
gap:22px;
p{
font-weight: 400;
font-size: 16px;
font-family: 'Lato', sans-serif;
}
h1{
font-weight: 600;
font-size: 55px;
line-height: 64px;
}
h5{
font-weight: 500;
font-size: 14px;
line-height: 14px;
text-transform: uppercase;
color: #D2153D;

}
`
const Left = styled.div`
width: 380px;
img{
    width:100%;
}
 
`