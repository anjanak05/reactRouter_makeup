export const fetchData = ({page=1, limit=8}) => {
  return fetch(
    `http://localhost:9090/products?_page=${page}&_limit=${limit}`
  ).then((res) => res.json());
};

export const fetchEyesData = () => {
  return fetch(
    `http://localhost:9090/products?product_type=eyeliner&_page=1&_limit=20`
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

export const fetchCartData = () => {
  return fetch(
    `http://localhost:9090/carts`
  ).then((res) => res.json());
};
