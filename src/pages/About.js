import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import { useNavigate, useLocation } from 'react-router-dom';
function About() {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }, [location.pathname]);
    const handleAddEvent = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Add Event Button',
        });
    };
    const handleGoBackToHome = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Go Back to Home Button',
        });
        navigate('/home');
    };
    return (
        <div>
            <h2>About Page Component Visit</h2>
            <button onClick={handleAddEvent}>Add Event</button>
            <button onClick={handleGoBackToHome}>Go Back To Home</button>
        </div>
    );
}

export default About;
