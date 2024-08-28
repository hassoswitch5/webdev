import React from 'react';
import { useNavigate } from 'react-router-dom';

const GrapeImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/grapes-info');
    };

    return (
        <div>
            <img src="grape.png" alt="Grapes" style={{ width: '200px' }} />
            <button onClick={handleClick}>Learn More About Grapes</button>
        </div>
    );
};

export default GrapeImage;
