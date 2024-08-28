import React from 'react';
import { useNavigate } from 'react-router-dom';

const BananaImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/bananas-info');
    };

    return (
        <div>
            <img src="banana.png" alt="Bananas" style={{ width: '200px' }} />
            <button onClick={handleClick}>Learn More About Bananas</button>
        </div>
    );
};

export default BananaImage;
