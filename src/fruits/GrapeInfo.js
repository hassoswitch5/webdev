import React, { useState } from 'react';

const GrapeInfo = () => {
    const pageStyle = {
        backgroundColor: '#e1bee7',
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
                src="grapes.png"
                alt="Grapes"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Grapes</h1>
            <p>Grapes are small, round fruits that come in various colors such as green, red, and purple. They are sweet and juicy, often eaten fresh or used to make wine.</p>
            <FruitCounter name="Grapes" />
        </div>
    );
};

export default GrapeInfo;
