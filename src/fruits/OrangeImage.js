import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrangeImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/oranges-info');
    };

    return (
        <div>
            <img src="orange.png" alt="Oranges" style={{ width: '200px' }} />
            <button onClick={handleClick}>Learn More About Oranges</button>
        </div>
    );
};

export default OrangeImage;
