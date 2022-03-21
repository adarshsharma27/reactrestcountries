import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
const Description = () => {
    const { name } = useParams();
    const [countryDesc, setCountryDesc] = useState([]);

    useEffect(() => {
        const setDescription = async () => {
            if (name === "" && name.length <= 3) return;
            const ApiUrl2 = `https://restcountries.com/v2/name/${name}`;
            const response = await fetch(ApiUrl2);
            const data = await response.json();
            setCountryDesc(data);
        };
        setDescription();
    }, [name]);

    return (
        <>
            <section>
                <section className="bg-light">
                    <div className="container h-100 w-100 py-4 mx-auto">
                        {countryDesc.map((element, index) => {
                            let { flag, name, nativeName,capital,subregion ,region, population,area,callingCodes,timezones} = element;

                            return (
                                <div className="row h-100vh m-0 p-0 my-2 w-100 align-items-center py-4" id="details" key={index}>
                                    <div className="col-md-6 order-md-1 order-2 text-md-left  py-4 ">
                                        <h4 className="font-weight-light animation">
                                            <b>{name}</b>
                                        </h4>
                                        <h6 className="font-weight-light animation">
                                            <b>{nativeName}</b>
                                        </h6>
                                        <div className="description py-1 animation  overflow-hidden">
                                            <p> <span className="fw-bold">Capital</span>:{capital}</p>
                                            <p><span className="fw-bold"> Region</span>:{region}</p>
                                            <p><span className="fw-bold"> SubRegion</span>:{subregion}</p>
                                            <p><span className="fw-bold"> Population</span>:{population}</p>
                                            <p><span className="fw-bold"> Area</span>:{area}</p>
                                            <p><span className="fw-bold"> CallingCode</span>:+{callingCodes}</p>
                                            <p><span className="fw-bold"> TimeZone</span>:{timezones}</p>
                                        </div>
                                        <NavLink to="/" className="btn btn-primary  my-3  animation">
                                            Back
                                        </NavLink>
                                    </div>
                                    <div className="col-md-6 order-md-2 order-1 text-center p-0">
                                        <img src={flag} className="img-fluid" alt={name} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </>
    );
};

export default Description;
