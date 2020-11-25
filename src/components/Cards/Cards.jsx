import React from 'react';
import {Box,Card, CardContent,Grid,Typography} from '@material-ui/core';
import styles from './Cards.module.css';  
import cx from 'classnames';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
import {Assignment,Queue,GroupAdd, PriorityHigh, LibraryAddCheck} from '@material-ui/icons';
import CountUp from 'react-countup';

const Cards = ({ data: { lconfirmed,ldeaths,lrecovered,lsuspected, lastUpdate,lnew,lnewdeaths,gnew,gdeaths,grecovered,gtotal} }) => {
    console.log ('yooo..!');
    if(!lastUpdate) {
        return 'Loading Data... !';
    }
    return (

        <div >
            <Grid container spacing={0}>
                <Grid item xs={12} className={cx (styles.mainc)}>
                <Paper className={cx(styles.ppr)} ><Typography component = {'span'} variant ='h5' gutterBottom>
            <Box className={(styles.rows)} m={4}>TOTAL FIGURES - SRI LANKA </Box>
        </Typography><Grid container spacing ={4} justify ="center">
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5'color="primary" gutterBottom>Total Cases</Typography>
                    <Assignment color="primary"  fontSize="large"   />
                    <Typography variant ="h5" >
                    <CountUp fontsize={50} end={lconfirmed} separator=","/></Typography>                 
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5'color="primary" gutterBottom>Deaths</Typography>
                    <PriorityHigh color="error" fontSize="large"/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={ldeaths} separator=","/></Typography>                    
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>Recovered</Typography>
                    <LibraryAddCheck fontSize="large" style={{ color: green[500] }}/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={lrecovered} separator=","/></Typography>                    
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>Hospitalized</Typography>
                    <Queue color="secondary" fontSize="large"/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={lsuspected} separator=","/></Typography>
                    
                </CardContent>
            </Grid>
        </Grid><Box className={(styles.update)} m={4}>Last update at: {lastUpdate}</Box></Paper>
                </Grid>

                <Grid item xs={12}>
                <Paper className={cx(styles.ppr)} ><Typography component = {'span'} variant ='h5' gutterBottom>
            <Box className={(styles.rows)} m={4}>DAILY FIGURES - SRI LANKA</Box>
        </Typography>
        <Grid container spacing ={4} justify ="center">
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>New Cases</Typography>
                    <GroupAdd color="primary" fontSize="large"/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={lnew} separator=","/></Typography>
                    
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>Deaths</Typography>
                    <PriorityHigh color="error" fontSize="large"/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={lnewdeaths} separator=","/></Typography>
                    
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>Recovered</Typography>
                    <LibraryAddCheck fontSize="large" style={{ color: green[500] }}/>
                    <Typography variant ="h5">0</Typography>
                    
                </CardContent>
            </Grid>
        
            
        </Grid><Box className={(styles.update)} m={4}>Last update at: {lastUpdate}</Box></Paper>
                </Grid>

                <Grid item xs={12}>
                <Paper className={cx(styles.ppr)} ><Typography component = {'span'} variant ='h5' gutterBottom>
            <Box className={(styles.rows)}  m={4}>GLOBAL FIGURES</Box>
        </Typography>
        <Grid container spacing ={4} justify ="center">
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>New Cases</Typography>
                    <GroupAdd color="primary" fontSize="large"/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={gnew} separator=","/></Typography>
                    
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>Total Cases</Typography>
                    <Assignment color="primary" fontSize="large"/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={gtotal} separator=","/></Typography>
                    
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>Deaths</Typography>
                    <PriorityHigh color="error" fontSize="large"/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={gdeaths} separator=","/></Typography>
                    
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={2} className={cx (styles.card)}>
                <CardContent>
                    <Typography variant = 'h5' color="primary" gutterBottom>Recovered</Typography>
                    <LibraryAddCheck fontSize="large" style={{ color: green[500] } }/>
                    <Typography variant ="h5">
                    <CountUp fontsize={50} end={grecovered} separator=","/></Typography>
                    
                </CardContent>
            </Grid>    
        </Grid><Box className={(styles.update)} m={4}>Last update at: {lastUpdate}</Box></Paper>
                </Grid>    
            </Grid>
        </div>
    )
}
export default Cards;