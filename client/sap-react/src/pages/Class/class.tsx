import AddQuestionComponent from '../../components/add-question-component/add-question-component';
import StudentsQuestionsComponent from '../../components/students-questions/students-questions-component';
import StatisticComponent from '../../components/statistic-component/statistic-component';
import { useState, useEffect } from 'react';
import './class.css';
import { Grid } from '@mui/material';

const Class = () => {
  return (
    <div className='class-main-container'>
      <Grid container spacing={14}>
        <Grid item xs={12} sm={12} md={4}>
          <AddQuestionComponent />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <StatisticComponent />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <StudentsQuestionsComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Class;
