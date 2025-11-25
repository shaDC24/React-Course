import axios from "axios";
import { useEffect,useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

function HomePage({cart}) {

  const [products,setProducts] = useState([]);
  
  useEffect(() => {
    axios.get('/api/products')
    .then((response)=>{
        setProducts(response.data);
    });
  });

  /*axios.get('http://localhost:3000/api/products')
    .then((response)=>{
      return response.json();
    }).then((data)=>{
        console.log(data);
    });*/


  return (
    <>
    
    <title>Ecommerce Project</title>
    <link rel="icon" type="image/svg+xml" href="./public/home-favicon.png" />

    <Header cart={cart} />

    <div className="home-page">
      <ProductsGrid products={products} />
    </div>
    </>    
  );
}

export default HomePage;