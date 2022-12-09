import React from 'react'
import styled from 'styled-components'

const Testimonial = () => {
    return (
        <div>
            <Contain id='test'>
                <Wrap>
                    <Head>
                        <h4>Testimonials</h4>
                        <h2>Our Clients Say</h2>
                    </Head>
                    <Raw>
                        <Left>
                            <img src="./images/test.png" alt="" />
                        </Left>
                        <Vol>
                            <Right>
                                <Quot>
                                    <img src="./images/quote_icon.png" alt="" />
                                </Quot>
                                <p>Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique</p>
                                <Text>
                                    <h3>Katy Grey</h3>
                                    <h5>CEO Grey Industries</h5>
                                </Text>
                            </Right>
                            <Dot>
                                <img src="./images/dots.png" alt="" />
                            </Dot>
                        </Vol>
                    </Raw>
                </Wrap>
            </Contain>
        </div>
    )
}

export default Testimonial
const Vol=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:10px;
`
const Dot = styled.div`
margin-top:10px;
width: 64px;
img{
    100%;
}
`
const Quot = styled.div`
width:80px;
height:80px;
margin-bottom:10px;
img{
    100%;
}
`
const Text = styled.div`
h4{
    font-weight: 500;
font-size: 22px;
line-height: 26px;
color: #16213E;
    }
    h5{
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        color: #00215B;
    }
`

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
margin:200px 0;
`
const Raw = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
margin:100px 0;
`
const Right = styled.div`
display:flex;
width: 549px;
flex-direction:column;
gap:20px;
p{
font-weight: 400;
font-size: 16px;
font-family: 'Lato', sans-serif;
}

`
const Left = styled.div`
width: 309px;
height: 406px;
img{
    width:100%;
}
 
`