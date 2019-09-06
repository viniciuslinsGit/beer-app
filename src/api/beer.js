import axios from '../util/axios'

const beerApi = {
  all: async () => {
    const { data } = await axios.get('beers');
    return data;
  },
  get: async (id) => {
    const { data } = await axios.get(`beers/${id}`);
    if (data && data[0]) {
      return data[0]
    } else {
      return { food_pairing: {} }
    }
  }
}

export default beerApi
