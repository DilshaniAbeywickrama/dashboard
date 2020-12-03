import React from 'react';

import {Boxes,Cards, Charts, LineChart} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
    }


    async componentDidMount(){
        const fdata = await fetchData();

        this.setState({data: fdata});
        
    }
    render() {
        const {data} = this.state;
        return (
            <div className= {styles.container}>
                <Boxes />
                <Cards data={data} />
                
                <Charts data={data}/>
                <LineChart />
            </div>
        )
    }
}
export default App;