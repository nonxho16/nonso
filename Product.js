import React, { useEffect } from 'react'

const Product = () => {
    //state for saving the fetched data
    const [data, setData] = UseState(null);
    //state to manage the loading state
    const [loading, setLoading] = useState(true);
    //state to manage the error due to fetching
    const [error, setError] = useState(null);


    const endpoint = "https://fakestoreapi.com/products/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);
                const result = await response.json();
                console.log(result);

                setData(result.products);
                const imag1 = result.products[0].images;
                setImage(imag1);
            } catch (error) {
                console.log("error",error);
            }

        };
        fetchData();
    })
  return (
    <div></div>
  )
}

export default Product
