import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import LaptopCard from './LaptopCards';
import laptop1img from "../assets/picture/image 65.png"
import { useEffect } from 'react';


const CatalogLaptop = (props) => {

  const { id } = useParams();

  




  const [products, setProducts] = useState([
    { "id": 154621, "price": 550.00, "picture": laptop1img },
    { "id": 154622, "price": 50.00, "picture": laptop1img },
    { "id": 154623, "price": 75.00, "picture": laptop1img },
    { "id": 154624, "price": 499.00, "picture": laptop1img },
    { "id": 154625, "price": 100.00, "picture": laptop1img },
    { "id": 154626, "price": 801.00, "picture": laptop1img },
    { "id": 154627, "price": 750.00, "picture": laptop1img },
    { "id": 154628, "price": 499.00, "picture": laptop1img },
    { "id": 154629, "price": 499.00, "picture": laptop1img },
    { "id": 154630, "price": 320.00, "picture": laptop1img },
    { "id": 154631, "price": 320.00, "picture": laptop1img },
    { "id": 154632, "price": 499.00, "picture": laptop1img },
    { "id": 154633, "price": 650.00, "picture": laptop1img },
    { "id": 154634, "price": 220.00, "picture": laptop1img },
    { "id": 154635, "price": 220.00, "picture": laptop1img },
    { "id": 154636, "price": 220.00, "picture": laptop1img },
  ])

  
  const handleFilter = () => {
    setProducts(products.filter(item => item.id == id) )
  }
  
  useEffect(()=>{
    handleFilter()
  },[])
  
  // handleFilter();
  
  
  console.log(products)


  return (
    <>
      <div className='px-[258px] flex flex-wrap'>

        {
          products.map((item, index) => (

            <LaptopCard key={index} id={item.id} price={item.price} picture={item.picture} />

          ))
        }
      </div>
    </>
  );
}

export default CatalogLaptop;