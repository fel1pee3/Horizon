import axios from 'axios';

const apiUrl = "https://api.mercadolibre.com/sites/MLB/search?q=";

const AxiosProducts = async (query) => {
  try {
    const response = await axios.get(`${apiUrl}${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default AxiosProducts;
