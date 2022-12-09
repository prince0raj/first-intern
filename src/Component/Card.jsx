import React from 'react'
import styled from 'styled-components';
const Card = (prop) => {
    return (
        <Contain>
            <img src={prop.img} alt="" />
            <Text>
                <h5>{prop.tittle}</h5>
                <p>{prop.dec}</p>
            </Text>
        </Contain>
    )
}

export default Card;

const Contain=styled.div`
display:flex;
flex-direction:column;
gap:25px;
position:relative;
width: 350px;
img{
width:100%;
}

`
const Text=styled.div`
h5{
    display:block;
    font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #00215B;
font-family: 'Lato', sans-serif;
}
p{
    display:block;
    font-weight: 400;
font-size: 17px;
line-height: 28px;
font-family: 'Lato', sans-serif;
color: #41444B;
}
`