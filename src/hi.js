// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BananaImage from './BananaImage';
import BananaInfo from './BananaInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BananaImage />} />
                <Route path="/banana-info" element={<BananaInfo />} />
            </Routes>
        </Router>
    );
}

export default App;

// BananaImage.js
import { useNavigate } from 'react-router-dom';

function BananaImage() {
    const navigate = useNavigate();

    return (
        <div>
            <img src="banana.jpg" alt="Banana" />
            <button onClick={() => navigate('/banana-info')}>Learn More About Bananas</button>
        </div>
    );
}

export default BananaImage;

// BananaInfo.js
function BananaInfo() {
    return <div>Here is some information about bananas...</div>;
}

export default BananaInfo;
