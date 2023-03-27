import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/mealActions";

import "./Card.css";

const Card = ({
  Restaurant,
  Cafe,
  Shake,
  Gym,
  Indian,
  Chinese,
  Italian,
  Korean,
  Mexican,
  German,
}) => {
  const dispatch = useDispatch();

  const addHandler = (Indian) => {
    dispatch(addToCart(Indian));
    console.log(Indian);
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
    console.log(id);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMITTED THE AMOUNTS");
  };

  return (
    <>
      {Restaurant && (
        <div className="card p__acme" key={Restaurant.id}>
          <img
            className="card-img"
            src={Restaurant.img}
            alt="restuarentImage"
          />
          <div className="card-intro">
            <h2 className="card-header">{Restaurant.name}</h2>
            <p className="card-p">{Restaurant.desc}</p>
          </div>
        </div>
      )}
      {Cafe && (
        <div className="card p__acme" key={Cafe.id}>
          <img className="card-img" src={Cafe.img} alt="cafeImage" />
          <div className="card-intro">
            <h2 className="card-header">{Cafe.name}</h2>
            <p className="card-p">{Cafe.desc}</p>
          </div>
        </div>
      )}
      {Shake && (
        <div className="card p__acme" key={Shake.id}>
          <img className="card-img" src={Shake.img} alt="shakeImage" />
          <div className="card-intro">
            <h2 className="card-header">{Shake.name}</h2>
            <p className="card-p">{Shake.desc}</p>
          </div>
        </div>
      )}
      {Gym && (
        <div className="card p__acme" key={Gym.id}>
          <img className="card-img" src={Gym.img} alt="gymImage" />
          <div className="card-intro">
            <h2 className="card-header">{Gym.name}</h2>
            <p className="card-p">{Gym.desc}</p>
          </div>
        </div>
      )}

      {Indian && (
        <div className="card p__acme" key={Indian.id}>
          <img className="card-img" src={Indian.img} alt="Image" />
          <div className="card-intro">
            <h2 className="card-header">{Indian.name}</h2>
            <p className="card-p">{Indian.desc}</p>

            <form onSubmit={submitHandler}>
              <button
                type="submit"
                onClick={() => {
                  addHandler(Indian);
                }}
              >
                Add to Cart
              </button>
              <button
                type="submit"
                onClick={() => {
                  removeHandler(Indian.id);
                }}
              >
                Remove from Cart
              </button>
              <Link to="/cart">CART</Link>
            </form>
          </div>
        </div>
      )}

      {Chinese && (
        <div className="card p__acme" key={Chinese.id}>
          <img className="card-img" src={Chinese.img} alt="Image" />
          <div className="card-intro">
            <h2 className="card-header">{Chinese.name}</h2>
            <p className="card-p">{Chinese.desc}</p>
          </div>
        </div>
      )}
      {Italian && (
        <div className="card p__acme" key={Italian.id}>
          <img className="card-img" src={Italian.img} alt="Image" />
          <div className="card-intro">
            <h2 className="card-header">{Italian.name}</h2>
            <p className="card-p">{Italian.desc}</p>
          </div>
        </div>
      )}
      {Korean && (
        <div className="card p__acme" key={Korean.id}>
          <img className="card-img" src={Korean.img} alt="Image" />
          <div className="card-intro">
            <h2 className="card-header">{Korean.name}</h2>
            <p className="card-p">{Korean.desc}</p>
          </div>
        </div>
      )}
      {Mexican && (
        <div className="card p__acme" key={Mexican.id}>
          <img className="card-img" src={Mexican.img} alt="Image" />
          <div className="card-intro">
            <h2 className="card-header">{Mexican.name}</h2>
            <p className="card-p">{Mexican.desc}</p>
          </div>
        </div>
      )}
      {German && (
        <div className="card p__acme" key={German.id}>
          <img className="card-img" src={German.img} alt="Image" />
          <div className="card-intro">
            <h2 className="card-header">{German.name}</h2>
            <p className="card-p">{German.desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
