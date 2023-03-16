import React from "react";
import "./NewArrivalProduct.css";
import { Image } from "react-bootstrap";
export default function NewArrivalProduct({ item }) {
  
  return (
    <div>
      <div className="product-div">
        <h6 className="p-title">{item.title}</h6>
        <p className="p-desc">{item.description.slice(0, 15)}</p>

        <Image src={item.image} alt="p-img" className="p-img" fluid/>
        <div className="d-flex justify-content-between ">
          <s className="p-price-one">RS RS 60.000</s>
          <p className="p-price">RS {item.price}</p>
        </div>
        <button className="add-cart-btn">Add to cart</button>
      </div>
    </div>
  );
}
