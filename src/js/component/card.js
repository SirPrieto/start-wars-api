import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import { string, object } from "prop-types";

export const Card= ( { data } ) => {
   
  return (
    <div className="col">
      <div className="card m-1 " style={{width:"18rem"}} >
        <img src="https://fictionhorizon.com/wp-content/uploads/2020/07/STarWars-1-1-1024x576.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <ul>
            <li>{data.prop1}: {data.value1} </li>
            <li>{data.prop2}: {data.value2}</li>
            <li>{data.prop3}: {data.value3} </li>
          </ul>
          <Link to={{pathname:"/carddetail/" + data.name, state:data }}>
          <button  type="button" className="btn btn-primary">
            Go somewhere
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  characterprop : PropTypes.object,
};