import React, { useEffect, useState } from 'react'
import "./NewArrival.css"
import NewArrivalProduct from './NewArrivalProduct';
import { Container } from 'react-bootstrap';

export default function NewArrival() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data.slice(0,10)));
  }, []);

  return (
    <>
    <h3 className='header-arrive'> <span className='arrive-span'>New</span>Arrival</h3>
    <div className='cont-div-new'>
      {data.map((item) => (
        <NewArrivalProduct  key={item.id} item={item} />
      ))}
    </div>
    </>
   
  );
}


   
  

