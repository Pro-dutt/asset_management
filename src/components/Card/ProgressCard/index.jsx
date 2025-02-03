import React from 'react';
import styles from './index.module.css';
import CircularProgressBar from '@/components/CircularProgressBar';

const ProgressCard = ({ data, cardTitle }) => {
  const colors = ['red', 'violet', 'orange', 'green'];
  return (
    <div className={`${styles.main_container}`}>
      <div className={styles.inner_container}>
        <div>{cardTitle}</div>
        
        {/* Make sure to use data.map() correctly */}
        {data?.map((item, index) => {
          // Use modulus to cycle through the colors array
          const color = colors[index % colors.length];
          // {console.log(color)}
          return (
            <div key={item._id}>
              <CircularProgressBar progress={item.percentage} color={color} />
              <h6>{item.title}</h6>
              <p>{`${item.value} ${item.unit}`}</p>
              <div>{item.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressCard;
