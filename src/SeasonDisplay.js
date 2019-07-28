import React from 'react';
import './SeasonDisplayCss.css';

const getSeason=(lat,month)=>{
    
    if(month>2&&month<9){
        return lat>0 ?{icon:'sun',weather:`let's hit the beach`}:{icon:'snowflake',weather:`Burr it's chilly`}
    }
    return lat>0 ? {icon:'snowflake',weather:`Burr it's chilly`}:{icon:'sun',weather:`let's hit the beach`}

}
const season=(props)=>{
    const weatherobj=getSeason(props.latLong.lat,new Date().getMonth())
    return(
        <div className='season-component'>
            <i className={`left massive ${weatherobj.icon} icon`}></i>
            <h1>{weatherobj.weather}</h1>
            <i className={`right massive ${weatherobj.icon} icon`}></i>
        </div>
    )
}

export default season;