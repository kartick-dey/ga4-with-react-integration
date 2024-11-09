import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import { useNavigate, useLocation } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }, [location.pathname]);
    const handleVisitAbout = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Visit About Button',
        });
        navigate('/about');
    };
    return (
        <div>
            <h2>Home Page Component Visit</h2>
            <button onClick={handleVisitAbout}>Visit About</button>
        </div>
    );
}

export default Home;
