import React from 'react';
import styles from './index.module.css';
import CircularProgressBar from '@/components/CircularProgressBar';

const StatCard = ({ data }) => {
  return (
    <div className={`${styles.main_container} ${styles[`main_container_border_${data.color}`]}`}>
      <div className={styles.inner_container}>

        <div className={styles.stat_container}>
        <h6>{data.title}</h6>

        {/* <CircularProgressBar progress={data.percentageValue} /> */}
          <h6>{data.value}</h6>
          <div className={styles.sub_title}>{data.subTitle}</div>
        </div>
        <div className={`${styles.icon_container} ${styles[data.color]}`}>
          {data.icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
