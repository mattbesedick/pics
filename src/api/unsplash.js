import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 9da8dd3f114a3b05fe86a04aa0c86cc32d14c70dfb05cfa55f4f91cd119434a0'
	}
});
