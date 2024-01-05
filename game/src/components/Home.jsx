import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const Home = ({toggle}) => {
  return (
    <div>
      <Container>
        <div>
            <img src='/images/dice/dices.png'/>

        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </div>
  )
}

export default Home


const Container=styled.div`
overflow-y: hidden;
max-width:1180px;
height:100vh;
display:flex;
margin:0 auto;
align-items:center;
@media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
.content{
    h1{
        font-size:96px;
        white-space:now-rap;
        @media (max-width:768px){
            font-size:48px;
        }
    }
}


`