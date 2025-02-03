import React from 'react'
import StatCard from './components/StatCard'
import styles from "./styles/index.module.css"
const Stats = ({data}) => {
  return (
    <div className={`${styles.container}`}>
            {data.map((item) => (
                <StatCard key={item._id} data={item} />
            ))}
     </div>
  )
}

export default Stats
