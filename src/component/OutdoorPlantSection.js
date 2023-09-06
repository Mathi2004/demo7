import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import './Main.css'

function OutdoorPlantSection({addToCart}) {
  const outdoorPlantsData=[
    {
      name: 'Weigela',
      price: 250,
      image: "https://cdn11.bigcommerce.com/s-jmzfi5zcr2/product_images/uploaded_images/weigela-shrub-blooming-in-garden-planter.jpg",
    },
    {
      name: 'Bird of Paradise',
      price: 400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kUpy8EWlLZatYwH-nwRzsPMNbfZ7yITF6w&usqp=CAU",
    },
    {
      name: 'Peace Lily',
      price: 430,
      image: "https://blog.nurserylive.com/wp-content/uploads/2016/10/peace-lily.jpg",
    },
    {
      name: 'Rose',
      price: 430,
      image: "https://cdn.euroflorist.com/Products/600x700/PL20EMER03S.jpg",
    },
    {
      name: 'Lavendar',
      price: 500,
      image: "https://m.media-amazon.com/images/I/81d9Nq6BnLL.jpg",
    },
    {
      name: 'Bougainvillea',
      price: 600,
      image: "https://media.istockphoto.com/id/536407093/photo/bougainvillea.jpg?s=612x612&w=0&k=20&c=AjxtT68gV-2H-iZu2tRbKj1hlKCmYt6Nh9pTFZ0XhPY=",
    },
  ];
  const [det, setDet] = useState({
    name : '',
    price : '0'
  })

  function postcart(plant){
      setDet({...det,
          name: plant.name,
          price : plant.price
      })
      console.log(det);
      axios.post('http://localhost:8080/addcart', det)
      .then((response)=>{
          console.log(response.data)
      })
  }
  return (
    <section className="product" id="product">
      <h1 className="heading">Outdoor Plants</h1>
      <div className="box-container">
        {outdoorPlantsData.map((plant, index) => (
          <div className="box" key={index}>
            <span className="discount">-{index + 10}%</span>
            <div className="icons">
              {/* Add your like button here */}
              <FontAwesomeIcon icon={['fas', 'thumbs-up']} />

              <Link
                to={`/product/${plant.name}`} // Define your product path here
                className="fas fa-thumbs-up"
                data-product-name={plant.name}
                data-product-price={plant.price}
                data-product-image={plant.image}
              ></Link>
            </div>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <div className="price">
              Rs.{plant.price}
              <span>Rs.{plant.price + 30}</span>
            </div>
            <button
  className="btn add-to-cart"
  onClick={()=>postcart(plant)}
  data-product-name={plant.name}
  data-product-price={plant.price}
  data-product-image={plant.image}
  style={{backgroundColor:'black',color:'white'}}
>
  Add to cart
</button>

          </div>
        ))}
      </div>
    </section>
  );
}

export default OutdoorPlantSection;
