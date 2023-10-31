import * as React from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import './forum.css';
import forum from '../../photos/forum.svg';

const Forum = () => {
  return (
    <div className='main-forum-container'>
      <div className='question-forum-container'>
        <div className='answer-forum-container'>
          <div
            className='anonymous-question'
            style={{ backgroundColor: '#337CCF' }}
          >
            <span>
              <Avatar src='/broken-image.jpg' />
              <h4>
                Što je Prvi Kirchhoffov zakon i kako se izražava matematički?
              </h4>
            </span>
          </div>
          <hr style={{ margin: 0 }} />
          <div className='anonymous-question'>
            <span>
              <Avatar sx={{ bgcolor: 'blue', marginLeft: 5 }}>P</Avatar>
              <h4 style={{ marginLeft: 38 }}>
                Kirchhoffov prvi zakon, poznat i kao Zakon očuvanja naboja, kaže
                da je zbroj svih struja koje ulaze u čvor jednako zbroju svih
                struja koje izlaze iz čvora. Matematički se izražava kao:
                ΣI_ulaz = ΣI_izlaz.
              </h4>
            </span>
          </div>
          <hr style={{ margin: 0 }} />
          <div
            className='anonymous-question'
            style={{ backgroundColor: '#337CCF' }}
          >
            <span>
              <Avatar src='/broken-image.jpg' />
              <h4>
                Što je trofazni sistem i koje su njegove prednosti u odnosu na
                jednofazni sistem?
              </h4>
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            helperText=' '
            id='demo-helper-text-aligned-no-helper'
            label='Pitanje / Odgovor'
            type='text'
            style={{ width: 500 }}
            InputLabelProps={{ style: { color: '#fff' } }}
          />

          <Button style={{ width: 120, height: 50 }} variant='contained'>
            Send
          </Button>
        </div>
      </div>

      <div className='notifications-container'>
        <img src={forum} style={{ height: 300 }} alt='' />
      </div>
    </div>
  );
};

export default Forum;
