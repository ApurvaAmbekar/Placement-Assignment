import React from 'react';
import {FaTimes, FaRegCircle} from 'react-icons/fa'
import {BsDash} from 'react-icons/bs'


// This component will only render the icon based on the value passed
// by the parent component
const Icon = ({name}) => {
    switch (name) {
        case 'cross':
            return <FaTimes className="icon" />
    
        case 'circle':
            return <FaRegCircle className="icon" />
        
        default:
            return <BsDash className="icon" />
    }
};

export default Icon;