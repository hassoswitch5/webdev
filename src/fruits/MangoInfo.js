import React, { useState } from 'react';

const MangoInfo = () => {
    const pageStyle = {
        backgroundColor: '#fff8e1',
        minHeight: '100vh',
        padding: '20px',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    const FruitCounter = ({ name }) => {
        const [count, setCount] = useState(0);

        const increment = () => setCount(count + 1);
        const decrement = () => setCount(count > 0 ? count - 1 : 0);
        const handleInputChange = (e) => {
            const value = parseInt(e.target.value, 10);
            setCount(isNaN(value) || value < 0 ? 0 : value);
        };

        return (
            <div>
                <h2>{name}: {count}</h2>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <input
                    type="number"
                    value={count}
                    onChange={handleInputChange}
                />
            </div>
        );
    };

    return (
        <div style={pageStyle}>
            <img
                src="mango2.png"
                alt="Mangoes"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Mangoes</h1>
            <p>Mangoes are tropical fruits known for their sweet and juicy flavor. They are rich in vitamins, minerals, and antioxidants.</p>
            <FruitCounter name="Mangoes" />
        </div>
    );
};

export default MangoInfo;
