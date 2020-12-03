import React from 'react';
import { Doughnut} from 'react-chartjs-2'
import styles from './Charts.module.css'
import {Grid, Paper} from '@material-ui/core'


const Charts = ({ data: { lconfirmed,ldeaths,lrecovered,gdeaths,grecovered,gtotal}}) => {
    console.log('yh..')
    const lChart=(
        <Doughnut
            data={{
                labels: ['Deaths', 'Recoveries', 'Active Cases'],
                datasets: [{
                    data:[ldeaths,lrecovered,lconfirmed],
                    backgroundColor: ['red','green', 'blue'],
                }]
            }}
        />
    )
    const gChart=(
        <Doughnut
            data={{
                labels: ['Deaths', 'Recoveries', 'Active Cases'],
                datasets: [{
                    data:[gdeaths,grecovered,gtotal],
                    backgroundColor: ['red','green', 'blue'],
                }]
            }}
        />
    )
    
    return (
        <div >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper className={styles.charts}>
                    <h2 className={styles.charttitle}> LOCAL BREAKDOWN </h2>
                    {lChart}
                </Paper>
                
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <Paper className={styles.charts}>
                    <h2 className={styles.charttitle}> GLOBAL BREAKDOWN </h2>
                    {gChart}
                </Paper>
                </Grid>
          </Grid>
        </div>
      )
}
export default Charts;