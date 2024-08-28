import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppleImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/apples-info');
    };

    return (
        <div>
            <img src="apple.png" alt="Apples" style={{ width: '200px' }} />
            <button onClick={handleClick}>Learn More About Apples</button>
        </div>
    );
};

export default AppleImage;
