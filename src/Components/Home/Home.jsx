import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className='banner'>
        <div className="background-image"></div>
        <div className="intro">
          <h1>Welcome to Donut Factory</h1>
          <p>Handcrafted with Love, Baked to Perfection</p>
        </div>
      </div>

      <div className="history">

        <div className="history-content">
          <h1>History of Baking</h1>

          <div className="legacy">
            <h3>A Legacy of Love and Passion</h3>  
            <p>At [Bakery Name], our story begins in the heart of [City/Town] with a family recipe passed down through generations. 
            Founded in [Year], our bakery was born out of a deep love for baking and a desire to share our passion with the community.</p> 
          
          </div>

          <div className="beginnings">
            <h3>Humble Beginnings</h3>
            <p>Our journey started in a small kitchen, where [Founder's Name], a talented baker with a dream, began crafting bread, 
            pastries, and cakes using traditional methods and the finest ingredients. With a commitment to quality and a belief in 
            the power of homemade goodness, [Founder's Name] quickly gained a loyal following.</p>
          </div>

          <div className="future">
            <h3>Looking to the Future</h3>
            <p>As we look to the future, we remain committed to the principles that have made us a cherished part of the [City/Town] community.
             We invite you to join us on our journey, savoring the flavors and experiences that have defined [Bakery Name] for generations.</p>
          </div>
        </div>
        
      </div>

    </div>
    
  )
}

export default Home