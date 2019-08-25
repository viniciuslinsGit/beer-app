import axios from '../util/axios'

const beerApi = {
  all: async () => {
    const { data } = await axios.get('beers');
    return data;
  }
}

export default beerApi
