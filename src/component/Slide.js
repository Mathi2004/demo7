import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
function Slide({ cart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const sliderImages = [
    
     'https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1391505/pexels-photo-1391505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/56905/pexels-photo-56905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1750029/pexels-photo-1750029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages]);

  return (
    <header>
     

      <div className="header-1" style={{position:'relative'}}>
        {sliderImages.map((image, index) => (
         <div className='slider' 
         key={index}
         style={{
           backgroundImage: `url(${image})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           width: '80%',
           height: '50vh',
           display: index === currentImageIndex ? 'block' : 'none',
         }}
       >
         <div className="image-text">
           <p>Happiness</p>
           <h3>is having more and more</h3>
           <h2>Plants</h2>
         </div>
       </div>
        ))}
      </div>
    </header>
  );
}



export default Slide;
