import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '47497200807f665b1c4348dd72d4d8cf';

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_KEY,
		},
	});
	return data;
};
