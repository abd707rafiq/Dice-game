import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import RoleDice from './RoleDice'
import { OutlineButton,Button } from '../styled/Button'
import styled from 'styled-components'
import Rule from './Rule'
const GamePlay = () => {
    const [error,setError]=useState("");
    const [showRules,setShowRules]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();
    const [score,setScore]=useState(0);
    const [currentDice,setCurrentDice]=useState(1);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };
   
  
    const resetScore=()=>{
        setScore(0);
    }
    const roleDice=()=>{
        if(!selectedNumber){
            setError("plz select number");
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);
    
        if (selectedNumber === randomNumber) {
          setScore((prev) => prev + randomNumber);
        } else {
          setScore((prev) => prev - 2);
        }
    
        setSelectedNumber(undefined);
    }
  return (
    <div>
      <Container>
        <div className='top_section'>
            <TotalScore score={score}/>
            <NumberSelecter 
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            
            />
        </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice} />
       <div className='btns'>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>
            
            {showRules ? "Hide" :"Show"} Rules</Button>
       </div>
       {showRules && <Rule/>}

      </Container>
    </div>
  )
}

export default GamePlay

const Container=styled.main`
padding-top: 70px;
  .top_section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: end;
    
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
  }


`