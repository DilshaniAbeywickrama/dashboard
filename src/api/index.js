import axios from 'axios';

const url = 'https://hpb.health.gov.lk/api/get-current-statistical';

export const fetchData = async () => {
    try {
        const {data} = await axios.get(url);
        
        const realdata = {
            lastUpdate:data.data.update_date_time,
            lconfirmed:data.data.local_total_cases,
            ldeaths:data.data.local_deaths,
            lrecovered:data.data.local_recovered,
            lsuspected:data.data.local_total_number_of_individuals_in_hospitals,

            lnew:data.data.local_new_cases,
            lnewdeaths:data.data.local_new_deaths,
            
            gnew:data.data.global_new_cases,
            gdeaths:data.data.global_deaths,
            grecovered:data.data.global_recovered,
            gtotal: data.data.global_total_cases,
        }
        return realdata;
    }
    catch (error){
    }
}

