import React, { useState } from 'react';

const AppleInfo = () => {
    const pageStyle = {
        backgroundColor: '#f0f8ff',
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
                src="apple2.png"
                alt="Apples"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Apples</h1>
            <p>Apples are a popular fruit known for their crisp texture and sweet flavor. They are rich in vitamins and fiber.</p>
            <FruitCounter name="Apples" />
        </div>
    );
};

export default AppleInfo;
