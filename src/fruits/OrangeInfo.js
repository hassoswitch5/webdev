import React, {useState} from 'react';

const OrangeInfo = () => {
    const pageStyle = {
        backgroundColor: '#ffe0b2',
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
                src="orange2.png"
                alt="Oranges"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Oranges</h1>
            <p>Oranges are citrus fruits known for their tangy flavor and high vitamin C content. They are refreshing and packed with nutrients.</p>
            <FruitCounter name="Strawberries" />
        </div>
    );
};

export default OrangeInfo;
