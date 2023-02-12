import './../styles/App.css';
import { useEffect } from 'react';
import axios from 'axios';
import CopyRight from './CopyRight';
import Navbar from './Navbar';
import Signin from'./Signin'
import Products from './Products';
import { Fragment } from 'react';
import React, { useState } from 'react';

const Categories = ({loadCategory}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     axios
        .get('http://localhost:8083/api/category/')
        .then((response) => {
           setPosts(response.data);
        })

  }, []);

  return (


       
        <div class="col-sm-2 sidebar" >
        {posts.map((item, index) => {
           return (

            

                    <ul key={index}>
                                      
                       <li onClick={()=>loadCategory(item.categoryId)}>
                      
                      {item?.name}
                      </li>
                       </ul>  
                           






           
           );
        })}
     </div>
     
  )
};

const  Home = () => {
 
  const [category, setCategory] = useState(1);
  const loadCategory=(i)=>
  {
     setCategory(i)
  }
  return (


    <div  id="image">
      <Signin/>
<Navbar />
      <div class="container">
        <br></br>
        <div class="row">
          <div class="col-sm-2">
            <Categories loadCategory={loadCategory} />
          </div>

          <div class="col-sm">
            <div className='row'>
            <Products  category={category}  />    </div>

            </div>
        </div>
      </div>
      <CopyRight/>
    </div>



  
  );

}

export default Home;
