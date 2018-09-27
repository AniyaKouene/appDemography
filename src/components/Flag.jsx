import React from 'react';

const URL_BASE = "http://www.sciencekids.co.nz/images/pictures/flags680/"

const Flag = ({country, className}) => {
    return (
        <div>
            <img height="70px" width="100px"className={className} src={`${URL_BASE}${country}.jpg`} alt="flag"/>
        </div>

    )}
export default Flag; 