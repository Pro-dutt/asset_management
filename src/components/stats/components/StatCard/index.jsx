import React from 'react';
import styles from './index.module.css';


const StatCard = ({ data }) => {
  return (
    <div className={`${styles.main_container} ${styles[`main_container_border_${data.color}`]}`}>
      <div className={styles.inner_container}>
        <div className={styles.stat_container}>
          <h6>{data.title}</h6>
          <h4>{data.value}</h4>
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
