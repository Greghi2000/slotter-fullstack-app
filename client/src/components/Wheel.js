import React, {useState, useEffect} from 'react';
import './Wheel.css'

const Wheel = ({ symbols, symbol, wheelSetSchedules}) => {

    const getUrl = () => {

        // symbol is code to search for
        // find element in wheelSetSchedules that has code attribute that matches symbol
        const activeSchedule = wheelSetSchedules.find((w) => {
            return w.code === symbol
        })
        
        return activeSchedule.imageURL



    }
    return (
        <div className="Wheel">
            <div className='cropped'>
                <img className='cardImage' src={getUrl()} alt = {symbol} width='100%' />
            </div>
        </div>
    );
}

export default Wheel;