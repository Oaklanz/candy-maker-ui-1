import axios from "axios";

const fetchManufacturers = async () => {
  const { data } = await axios.get(`http://localhost:1337/api/manufacturers`); // eslint-disable-line no-undef

  return data;
};

export default fetchManufacturers