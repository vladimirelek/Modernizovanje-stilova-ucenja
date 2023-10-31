import './statistic-component.css';
import chart from '../../photos/finalChart.svg';
import DonutChart from 'react-donut-chart';
import { Radio, FormControlLabel } from '@mui/material';
import Connector from '../../signalr-connection'
import { useEffect, useState } from 'react';

const StatisticComponent = () => {
  const {events} = Connector();
  const [A, setA] = useState<number>(0);
  const [B, setB] = useState<number>(0);
  const [C, setC] = useState<number>(0);
  const [D, setD] = useState<number>(0);
  useEffect(() => {
    const handleMessageReceived = (_: string, message: string) =>{};
    const handleResponseReceived = (payload: Number) => {console.log('e jes');switch(payload){
      case 1: setA(A+1);
      break;
      case 2: setB(B+1);
      break;
      case 3: setC(C+1);
      break;
      case 4: setD(D+1);
      break;

    }};
    events(handleMessageReceived, handleResponseReceived);
  });
  return (
    <div className='statistic-main-container'>
      <div className='statistic-title'>
        <h1 style={{ color: 'white' }}>Statistika</h1>
      </div>
      <hr style={{ marginBottom: 20 }} />
      {/* <div className='chart-photo-container'>
        <img className='chartPhoto' src={chart} alt='Chart' />
      </div> */}
      <div className='chart-container'>
        <DonutChart
          data={[
            { label: 'Odgovor A', value: (A*100.0) / (A+B+C+D) },
            { label: 'Odgovor B', value: (B*100.0) / (A+B+C+D) },
            { label: 'Odgovor C', value: (C*100.0) / (A+B+C+D) },
            { label: 'Odgovor D', value: (D*100.0) / (A+B+C+D) },
          ]}
          colors={['#FE3A00', '#9E08F4', '#73FE00', ' #FFC101']}
        />
      </div>
    </div>
  );
};

export default StatisticComponent;
