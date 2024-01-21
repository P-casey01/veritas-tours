import React from 'react';
import "./tours.css"; // Corrected import statement
import Tours1 from '../../Images/Tours1.jpeg';
import Tours2 from '../../Images/Tours2.jpeg';
import Tours3 from '../../Images/Tours3.jpeg';
import Tours4 from '../../Images/Tours4.jpeg';

function Tours() {
    const tourData = [
        {
            id: 1,
            title: "Historical Derry Tour",
            description: "Explore the rich history of Derry with our guided walking tour around the city's historical landmarks.",
            image: Tours1 // Using imported image variable
        },
        {
            id: 2,
            title: "Cultural Experience Tour",
            description: "Immerse yourself in the local culture and learn about Derry's unique traditions and arts.",
            image: Tours2 // Using imported image variable
        },
        {
            id: 3,
            title: "Nature Trails of Derry",
            description: "Enjoy the scenic beauty of Derry's countryside with our nature trail tour.",
            image: Tours3 // Using imported image variable
        },
        {
            id: 4,
            title: "City Night Tour",
            description: "Experience the vibrant nightlife of Derry and explore the city's famous spots after dusk.",
            image: Tours4 // Using imported image variable
        }
    ];

    return (
        <section className="tours-section">
            {tourData.map(tour => (
                <div key={tour.id} className="tour">
                    <div className="tour-image-container">
                        <img src={tour.image} alt={tour.title} className="tour-image" />
                    </div>
                    <div className="tour-info">
                        <h3>{tour.title}</h3>
                        <p>{tour.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Tours;
