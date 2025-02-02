import React from 'react';
import image from '../../images/404_page-not-found.png';

const NotFound = () => {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <img src={image} alt="404 Page Not Found" className='img-fluid' />
        </div>
    );
}

export default NotFound;
