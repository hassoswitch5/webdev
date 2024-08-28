
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MangoImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/mango-info');
    };

    return (
        <div>
            <img src="mango.png" alt="mango" style={{ width: '200px' }} />
            <button onClick={handleClick}>Learn More About mangos</button>
        </div>
    );
};

export default MangoImage;
