import React, { useEffect, useState } from "react";
import "./index.css"


export default function Temp(){
    const[city,setcity]=useState(null)
    const[search,setsearch]=useState("delhi");
    useEffect(()=>{
        const fetchApi=async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=461d8c30ed051571e713e530229a08d1`
            const response=await fetch(url);
            console.log(response);
            const resjson=await response.json();
            console.log(resjson);
            setcity(resjson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
            <div className="box">

                <div className="inputData">
<input type="search" value={search} className="inputField"  onChange={(e)=>{setsearch(e.target.value)}}/>
                </div>
{!city?(<p>no data found</p>):(<>
    <div className="info">
                 <h1 className="location">
                 <i className="fas fa-street-view"></i>{search}
                 </h1>
                 <h2 className="temp">{city.temp}°Cel</h2>
                 <h3 className="tempmin_max">Max:{city.temp_max}°Cel   Min:{city.temp_min}°Cel</h3>
            </div>
            <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            </div>
</>)}


</div>
           
        </>
    )
}