import React from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ flag, name, capital, region, population }) => {
    let navigate = useNavigate();
    return (
        <>
            <div
                className="col-xl-3 col-md-3 col-sm-12"
                onClick={() => {
                    navigate(`/description/${name}`);
                }}
            >
                <div className="product-card text-left">
                    <img className="img-responsive" src={flag} alt={name} />
                    <div className="product-image-caption">
                        <div className="product-image-txt">
                            <h3>{name}</h3>
                            <p className="decription-1">Capital:{capital}</p>
                            <p className="decription-2">Region:{region}</p>
                            <p className="decription-3">Population:{population}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
