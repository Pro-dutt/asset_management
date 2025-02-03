import React from 'react';
import styles from './index.module.css';
import CircularProgressBar from '@/components/CircularProgressBar';

const ProgressCard = ({ data, cardTitle }) => {
  const colors = ['red', 'violet', 'orange', 'green'];
  return (
    <div className={`${styles.main_container}`}>
      <div>{cardTitle}</div>

        
        {/* Make sure to use data.map() correctly */}
        {data?.map((item, index) => {
          // Use modulus to cycle through the colors array
          const color = colors[index % colors.length];
          // {console.log(color)}
          return (
            <div key={index} className={styles.inner_container}>
              <CircularProgressBar progress={item.percentage} color={color} />
              <div className='item_details'> 
                <h6>{item.total} {item.unit}</h6>
                <p>{item.remaining} {item.unit}</p>
                <p>{item.used} {item.unit}</p>
                {/* <p>{`${item.remaining} ${item.unit}`}</p>
                <p>{`${item.used} ${item.unit}`}</p> */}
              </div>
              <div>{item.icon}</div>
            </div>
          );
        })}
    </div>
  );
};

export default ProgressCard;
