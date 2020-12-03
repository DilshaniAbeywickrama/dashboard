import React, { Component } from 'react'  
import axios from 'axios';  
import { Line } from 'react-chartjs-2'; 
import { Paper} from '@material-ui/core'; 
import styles from './LineChart.module.css';

export class Linecharts extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  
        }  
        componentDidMount() {  
                axios.get(`https://hpb.health.gov.lk/api/get-current-statistical`)  
                        .then(res => {  
                                  
                                const pcr = res.data.data.daily_pcr_testing_data;  
                                let date = [];  
                                let count = [];  
                                pcr.forEach(record => {  
                                        date.push(record.date);  
                                        count.push(record.count);  
                                });  
                                this.setState({  
                                        Data: {  
                                                labels: date,  
                                                datasets: [  
                                                        {  
                                                                label: 'No.of pcr tests',  
                                                                data: count,  
                                                                borderColor: '#800080'
                                                                          
                                                                         
                                                                 
                                                        }  
                                                ]  
                                        }  
                                });  
                        })  
        }  
        render() {  
                return (  
                        <div> 
                            <Paper className={styles.charts}>
                    <h2 className={styles.charttitle}> DAILY PCR TESTS </h2>
                    <Line  
                                        data={this.state.Data}  
                                        options={{ maintainAspectRatio: false }} />
                    
                </Paper> 
                                  
                        </div>  
                )  
        }  
}  
  
export default Linecharts 