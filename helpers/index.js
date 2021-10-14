const axios = require('axios');

const getAll = () => {
  return axios.get('http://api.openbrewerydb.org/breweries?per_page=10');
};

const getByName = (name) => {
  return axios.get(`https://api.openbrewerydb.org/breweries?by_name=${name}`);
}

const getByCity = (city) => {
  return axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
}

const getByNameAndCity = (query) => {
  const { name, city } = query;
  return axios.get(`https://api.openbrewerydb.org/breweries?by_name=${name}&by_city=${city}`)
}

module.exports = {
  getAll,
  getByName,
  getByCity,
  getByNameAndCity,
}
