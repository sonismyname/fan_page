import axios from 'axios'

export const getAddress = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axios.get('https://provinces.open-api.vn/api/?depth=2');
        return response;
      } catch (error) {
        console.error(error);
      }
})