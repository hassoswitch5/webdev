import React from 'react';
import { useNavigate } from 'react-router-dom';

const StrawberryImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/strawberries-info');
    };

    return (
        <div>
            <img src="strawberry.png" alt="Strawberries" style={{ width: '200px' }} />
            <button onClick={handleClick}>Learn More About Strawberries</button>
        </div>
    );
};

export default StrawberryImage;
