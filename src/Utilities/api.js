export const fetchData=()=>{
    return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)
    .then(res=>res.json())
}