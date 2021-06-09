import fetchManufacturers from "../actions/manufacturers";

export const filterManufacturers = (list, term) => {
  return list.filter((manufacturer) =>
    manufacturer.name.toLowerCase().includes(term.toLowerCase())
  );
};

export const retrieveManufacturers = async () => {
  const manufacturers = await fetchManufacturers();

  return manufacturers;
};
