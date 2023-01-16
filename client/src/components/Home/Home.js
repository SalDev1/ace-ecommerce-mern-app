import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Blue Tshrit",
  price: "Rs 3,000",
  images: [
    {
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
    },
  ],
  _id: "salman",
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Fragment>
      <MetaData title='Ace' />

      <div className='banner'>
        <p>Welcome to Ace</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href='#container'>
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className='homeHeading'>Featured Products</h2>

      <div className='container' id='container'>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
