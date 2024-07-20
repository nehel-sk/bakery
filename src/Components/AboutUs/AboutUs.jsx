import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to our bakery! We are passionate about baking the finest pastries, cakes, and breads. Our team of skilled bakers and pastry chefs use only the freshest ingredients to create delicious and beautiful baked goods. Whether you're looking for a sweet treat or a special cake for your celebration, we've got you covered!
        </p>
      </div>
      <div className="about-us-images">
        <img src="bakery1.jpg" alt="Bakery interior" className="about-us-image"/>
        <img src="bakery2.jpg" alt="Baking in progress" className="about-us-image"/>
      </div>
      <div className="about-us-team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team1.jpg" alt="Team member 1" className="team-member-image"/>
            <h3>John Doe</h3>
            <p>Head Baker</p>
          </div>
          <div className="team-member">
            <img src="team2.jpg" alt="Team member 2" className="team-member-image"/>
            <h3>Jane Smith</h3>
            <p>Pastry Chef</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
