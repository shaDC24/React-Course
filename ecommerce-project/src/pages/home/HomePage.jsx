import axios from "axios";
import { useEffect,useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";


function HomePage({cart,loadCart}) {

  const [products,setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  
  useEffect(() => {
    const getHomeData = async () =>{
    const urlPath = search ? `/api/products?search=${search}` : '/api/products';
    const response = await axios.get(urlPath);
    setProducts(response.data);
    };
    getHomeData();
  },[search]);

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
      <ProductsGrid products={products} loadCart={loadCart} />
    </div>
    </>    
  );
}

export default HomePage;