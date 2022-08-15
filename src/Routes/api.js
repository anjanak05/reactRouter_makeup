export const fetchData = () => {
  return fetch(
    `http://localhost:9090/products`
  ).then((res) => res.json());
};

export const fetchEyesData = () => {
  return fetch(
    `http://localhost:9090/products?product_type=eyeliner`
  ).then((res) => res.json());
};

export const fetchMakeupData = () => {
  return fetch(
    `http://localhost:9090/products?product_type=foundation`
  ).then((res) => res.json());
};

 
export const fetchLipsData = () => {
  return fetch(
    `http://localhost:9090/products?product_type=lip_liner`
  ).then((res) => res.json());
};

export const fetchNailsData = () => {
  return fetch(
    `http://localhost:9090/products?product_type=nail_polish`
  ).then((res) => res.json());
};
