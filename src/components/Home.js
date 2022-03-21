import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
const Home = () => {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);
    const setCountries = async () => {
        const ApiUrl1 = `https://restcountries.com/v2/all`;
        const response = await fetch(ApiUrl1);
        const data = await response.json();
        setCountry(data);
        setLoading(false);
    };
    useEffect(() => {
        setCountries();
    }, []);

    const setSearchedCountries = async (name) => {
        if (name === "" && name.length <= 3) return;
        const ApiUrl2 = `https://restcountries.com/v2/name/${name}`;
        const response = await fetch(ApiUrl2);
        const data = await response.json();
        setCountry(data);
    };

    const setFilteredCountries = async (regions) => {
        if (regions === "") return;
        const ApiUrl3 = `https://restcountries.com/v2/region/${regions}`;
        const response = await fetch(ApiUrl3);
        const data = await response.json();
        setCountry(data);
    };

    return (
        <>
            <div className="form py-4 container">
                <div className="form-container w-50 me-auto">
                    <input type="search" className="form-control   mx-auto" placeholder="search" id="search" autoComplete="off" onChange={(e) => setSearchedCountries(e.target.value)} />
                    <i className="fas fa-search"></i>
                </div>
                <div className="dropdowns">
                    <select id="regions" onChange={(e) => setFilteredCountries(e.target.value)}>
                        <option value="">Filter By Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania"> Oceania</option>
                    </select>
                </div>
            </div>
            <div className="content bg-light">
                <div className="container py-4">
                    <div className="row">
                        {loading ? (
                            <Loader />
                        ) : country.length !== undefined ? (
                            country.map((element, index) => {
                                let { flag, name, capital, region, population } = element;
                                return <Cards key={index} flag={flag} name={name} capital={capital} region={region} population={population} />;
                            })
                        ) : (
                            <h2>No Country Founded</h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
