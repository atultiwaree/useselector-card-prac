import React from "react";
import user from "./images/user.png";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {

  const state = useSelector((states) => states)


  return (
    <div className="App">
      <section className="User__img">
        <img src={user} alt="user" />
      </section>

      <section className="User__info">
        <p>
          {" "}
          <span className="faint">I am</span> a {state.description}
        </p>
        <p>
          {" "}
          <span className="faint">I like</span> {state.likes}
        </p>

        <p className="User__info__details User__info__divider faint">
          <span>Name: </span>
          <span>{state.name}</span>
        </p>
        <p className="User__info__details faint">
          <span>Location: </span>
          <span>{state.location}</span>
        </p>
      </section>
    </div>
  );
};

export default App;
