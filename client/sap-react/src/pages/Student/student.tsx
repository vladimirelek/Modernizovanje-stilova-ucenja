import { Grid, TextField } from '@mui/material';
import './student-style.css';
import { Button } from '@mui/material';
import Connector from '../../signalr-connection'
import { useEffect, useState } from "react";
const { events, answerMessage } = Connector();



const Student = () => {
  const [messageState, setMessage] = useState<string>('Dodaj pitanje');
  const [question, setQuestion] = useState<number>(0);
  const questionAndAnswers = messageState.split('|');
  useEffect(() => {
    const handleMessageReceived = (_: string, message: string) =>{
      setMessage(message);
      setQuestion(parseInt(questionAndAnswers[5], 10));
    }
    const handleResponseReceived = (payload: Number) => {};
    events(handleMessageReceived, handleResponseReceived);
  });

  const handleAnswer = (answer:number) => {
    console.log(question );
    answerMessage(answer, question);
  };
  return (
    <Grid container spacing={0}>
        <Grid item xs={6} sm={6} md={8}>
        <div className='student-main-container'>
          <div className='question-container'>
            <div className='question-title'>
              <h1 style={{ color: 'white' }}>Postavi pitanje</h1>
            </div>
            <hr style={{ marginBottom: 20 }} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Forma je poslata!');
              }}
            >
            <div>
              <TextField
                helperText=' '
                id='demo-helper-text-aligned-no-helper'
                label='PITANJE'
                type='text'
                style={{ width: 350 }}
                InputLabelProps={{ style: { color: '#fff' } }}
              />
            </div>

            <button type='submit'>Postavi pitanje</button>
          </form>
        </div>
      </div>
      </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <div className='question-container'>
            <div className='question-title'>
              <h1 style={{ color: 'white' }}>Pitanje profesora</h1>
            </div>
            <hr style={{ marginBottom: 20 }} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Forma je poslata!');
              }}
            >
            <div style={{ textAlign: 'center', justifyContent: 'center' }}>
              <h3 style={{ margin: 0 }}>
                {questionAndAnswers[0]}
              </h3>
            </div>
            <div className='answer-buttons'>
              <Button
                style={{ marginTop: 20, marginBottom: 20 }}
                variant='outlined'
                onClick={()=>{handleAnswer(1)}}
              >
                {questionAndAnswers[1]}
              </Button>

              <Button
                style={{ marginTop: 20, marginBottom: 20 }}
                variant='outlined'
                onClick={()=>{handleAnswer(2)}}

              >
                {questionAndAnswers[2]}
              </Button>

              <Button
                style={{ marginTop: 20, marginBottom: 20 }}
                variant='outlined'
                onClick={()=>{handleAnswer(3)}}

              >
                {questionAndAnswers[3]}
              </Button>

              <Button
                style={{ marginTop: 20, marginBottom: 20 }}
                variant='outlined'
                onClick={()=>{handleAnswer(4)}}
              >
                {questionAndAnswers[4]}
              </Button>
            </div>
          </form>
        </div>
      </Grid>
        
    </Grid>  
  );
};
export default Student;
