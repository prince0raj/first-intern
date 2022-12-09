import React from 'react'
import styled from 'styled-components'

const Why = () => {
    return (
        <Contain>
            <Wrap>
                <Left>
                  <img src="./images/why.png" alt="" />
                </Left>
                <Right>
                    <h1>Why choose Raghav Buildtech?</h1>
                    <p>Run by experienced industry leaders with credibility on faster turnaround,
                        transparent design and highly reliable. Turnkey solution for construction
                        of new projects, repairs to renovations of old buildings, interior designing,
                        exterior beautification, water seepage expertise all under one roof. Tech
                        enabled, quality and cost conscious, OTIF (On Time In Full) construction
                        model, employing the least carbon footprint techniques for environment
                        conservation</p>
                </Right>
            </Wrap>
        </Contain>
    )
}

export default Why

const Contain=styled.div`
margin:200px 0;
`
const Wrap=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:80vw;
margin:0 auto;
`
const Right=styled.div`
display:flex;
width: 549px;
flex-direction:column;
gap:40px;
p{
font-weight: 400;
font-size: 17px;
font-family: 'Lato', sans-serif;
}
h1{
font-weight: 600;
font-size: 55px;
line-height: 64px;
}
`
const Left=styled.div`
width: 470px;
img{
    width:100%;
}
 
`