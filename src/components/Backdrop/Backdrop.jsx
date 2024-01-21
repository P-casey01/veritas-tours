import React, { useState, useEffect } from 'react';
import "./Backdrop.css"; // Corrected import statement
import backdropImage from '../../Images/Backdrop.jpeg'; // Importing the backdrop image

function Backdrop() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setIsImageLoaded(true);
    };

    return (
        <div className="backdrop">
            <img 
                src={backdropImage} // Updated to use the imported image
                alt="Derry View" 
                onLoad={handleImageLoaded} 
                style={{ 
                    opacity: isImageLoaded ? 1 : 0, 
                    transition: 'opacity 1s ease-in'
                }} 
            />
        </div>
    );
}

export default Backdrop;
