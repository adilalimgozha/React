import axios from 'axios';

const API_URL = 'https://665c3c1b3e4ac90a04d9021e.mockapi.io/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Ошибка при загрузке продуктов:', error);
    throw error;
  }
};