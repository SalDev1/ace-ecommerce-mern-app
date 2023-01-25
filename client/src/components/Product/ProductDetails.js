import React, { Fragment, useEffect, useState } from "react";
import Carsouel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productActions";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartActions";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  console.log(product);

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  const [quantity, setQuantity] = useState(1);

  const increasedQuantity = () => {
    if (product.Stock <= quantity) {
      return;
    }
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreasedQuantity = () => {
    if (1 >= quantity) {
      return;
    }
    const qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    // console.log(match.params.id, quantity);
    dispatch(addItemsToCart(match.params.id, quantity));
    alert.success("Item Added to Cart");
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {" "}
          <MetaData title={`${product.name} -- ACE`} />
          <div className='ProductDetails'>
            <div>
              <Carsouel>
                {product?.images &&
                  product?.images?.map((item, i) => (
                    <img
                      className='CarouselImage'
                      key={item._id}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carsouel>
            </div>

            <div>
              <div className='detailsBlock-1'>
                <h2>{product.name}</h2>
                <p>Product #{product._id}</p>
              </div>
              <div className='detailsBlock-2'>
                <ReactStars {...options} />
                <span>({product.numOfReviews} Reviews)</span>
              </div>

              <div className='detailsBlock-3'>
                <h1>{`Rs. ${product.price}`}</h1>
                <div className='detailsBlock-3-1'>
                  <div className='detailsBlock-3-1-1'>
                    <button onClick={decreasedQuantity}>-</button>
                    <input readOnly value={quantity} type='number' />
                    <button onClick={increasedQuantity}>+</button>
                  </div>{" "}
                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? " Out of Stock" : "In Stock"}
                  </b>
                </p>
              </div>

              <div className='detailsBlock-4'>
                Description : <p>{product.description}</p>
              </div>

              <button className='submitReview'>Submit Review</button>
            </div>
          </div>
          <h3 className='reviewsHeading'>REVIEWS</h3>
          {product.reviews && product.reviews[0] ? (
            <div>
              {" "}
              {product?.reviews &&
                product?.reviews?.map((review) => (
                  <ReviewCard review={review} />
                ))}
            </div>
          ) : (
            <p className='noReviews'>No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
