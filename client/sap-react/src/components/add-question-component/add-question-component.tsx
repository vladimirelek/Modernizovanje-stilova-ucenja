import { TextField } from '@mui/material';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import './add-question-component.css';
import Connector from '../../signalr-connection'
import { useEffect, useState } from 'react';

interface Message{
  question: string;
  ansA: string;
  ansB: string;
  ansC: string;
  ansD: string;
  correctAnswer: number;
}

const AddQuestionComponent = () => {

  const [question, setQuestion] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');
  const [radioValue, setRadioValue] = useState<Number>(0);
  const { newMessage, events } = Connector();

  useEffect(() => {
    const handleMessageReceived = (_: string, message: string) =>{};
    const handleResponseReceived = (payload: Number) => {};
    events(handleMessageReceived, handleResponseReceived);
  });
  const handleRadioChange = (event: any) => {
      setRadioValue(event.target.value);
  }
  
  
 
  return (
    <div className='question-container'>
      <div className='question-title'>
        <h1 style={{ color: 'white' }}>Dodaj pitanje</h1>
      </div>
      <hr style={{ marginBottom: 20 }} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Forma je poslata!');
          console.log('ovo je u formi: ' + radioValue);
          newMessage({question: question, ansA: answerA, ansB:answerB, ansC: answerC, ansD: answerD, correctAnswer: radioValue } as Message);
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <TextField
            helperText=' '
            id='demo-helper-text-aligned-no-helper'
            label='PITANJE'
            type='text'
            style={{ width: 350 }}
            InputLabelProps={{ style: { color: '#fff' } }}
            onChange={e => setQuestion(e.target.value)}
          />
        </div>

        <div className='answers-container'>
          <div className='answers'>
          <TextField
            helperText=' '
            id='demo-helper-text-aligned-no-helper'
            label='Odgovor A'
            type='text'
            style={{ width: 200 }}
            InputLabelProps={{ style: { color: '#fff' } }}
            onChange={e => setAnswerA(e.target.value)}

          />

          <TextField
            helperText=' '
            id='demo-helper-text-aligned-no-helper'
            label='Odgovor B'
            type='text'
            style={{ width: 200 }}
            InputLabelProps={{ style: { color: '#fff' } }}
            onChange={e => setAnswerB(e.target.value)}

          />

          <TextField
            helperText=' '
            id='demo-helper-text-aligned-no-helper'
            label='Odgovor C'
            type='text'
            style={{ width: 200 }}
            InputLabelProps={{ style: { color: '#fff' } }}
            onChange={e => setAnswerC(e.target.value)}

          />

          <TextField
            helperText=' '
            id='demo-helper-text-aligned-no-helper'
            label='Odgovor D'
            type='text'
            style={{ width: 200 }}
            InputLabelProps={{ style: { color: '#fff' } }}
            onChange={e => setAnswerD(e.target.value)}

          />
          </div>
          <div className='correct-answer'>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                name='radio-buttons-group'
              >
                <FormControlLabel
                  
                  control={<Radio value={1} onChange={handleRadioChange} />}
                  label=''
                  style={{ marginBottom: 40 }}
                />
                <FormControlLabel
                  control={<Radio value={2} onChange={handleRadioChange}
                  />}
                  label=''
                  style={{ marginBottom: 40 }}
                />
                <FormControlLabel
                  
                  control={<Radio value={3} onChange={handleRadioChange} />}
                  label=''
                  style={{ marginBottom: 40 }}
                />
                <FormControlLabel control={<Radio value={4} onChange={handleRadioChange} />} label='' />
              </RadioGroup>
            </FormControl>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <button type='submit'>Postavi pitanje</button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestionComponent;
