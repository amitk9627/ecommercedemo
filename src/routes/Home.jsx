import React, { useEffect, useState } from 'react'


import Card from '../components/Card'
const Home = () => {
  

  const [products, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
        const res= await fetch("https://dummyjson.com/products");
        const data=await res.json();
        setProduct(data.products);
    })()
  }, [])

  return (
    <div>
      <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-10 max-lg:gap-5 p-2 wfull" >
        {
          products.map((item)=>{
            return  <Card item={item} key={item.id}/>
          })
        }
       
        
      </div>
    </div>
  )
}

export default Home
