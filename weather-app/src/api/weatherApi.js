import axios from  'axios'

const API_KEY = '6672760e633008940f12140155de8c69';
const Base_Url ='https://api.openweathermap.org/data/2.5/weather';

export const fetchweatherData = async(city) =>{
try {
    
    const response = await axios.get(Base_Url,{
        params:{
            q:city,
            appid:API_KEY,
            units:'metric'
        }
    })
    return response.data;
} catch (error) {
    console.log(error);
    throw new Error('Failed to fetch weather data');
}
};
