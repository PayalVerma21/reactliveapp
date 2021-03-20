import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState (null);
    const [search, setSearch] = useState("Bangalore");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=14aa01b00541a43fb8e2acc12b073703`
            const response = await fetch(url);
            
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        } 

        fetchApi();
    },[search] )

    return(
        <>
            <div className="box">
                <h2> Today's weather </h2>
                <h5>let's check: Sunglasses, umbralla or a sweater? </h5>
                <h6>Enter your city</h6>
                <div className = "inputData">
                        <input type ="search" 
                        value = {search}
                        className="inputfield"
                        onChange= { (event) => { setSearch(event.target.value)}}/>
                </div> 
            
            {!city ? (
                <p className="errorMessage">No data found</p>
            ) : (
                    <div className = "container">
                        <div className="info">
                            <h3 className="location">
                                <i className="fas fa-cloud-sun-rain"></i>  {search}
                            </h3>

                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>

                            <h3 className="tempmin_max">
                                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                            </h3>
                        </div>
                        <div className = "wave">
                            <div className = "wave-one"></div>
                            <div className = "wave-two"></div>
                            <div className = "wave-three"></div>
                        </div>
                    </div>
                    
            )

            }

           

        </div>
        </>
    )
}

export default Tempapp;