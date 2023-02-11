import * as React from 'react';
import './../styles/App.css';
import  { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Products = ({category}) => {
  const id=category
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     axios
    . get(`http://localhost:8083/api/category/products/${id}`)
        .then((response) => {
         
           setPosts(response.data);
    

        })
  }, [category]);

  

   return (
      <div class="contenair " >
  <div className="row">
    {posts.map((item, i) => {

      return (
        <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `../assets/${item.image}`}
          alt={item.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                  {item.price}€
              </p>
              <button className="btn btn-warning btn-sm" data-toggle="modal" data-target ="#mo">voir produit</button>


            </div>
          </div>
        </div>
        <Modal item={item} />

      </div>

    </div>
      );

    }
    
    
    )}
  </div>

</div>
   )
};
export const Modal = ({item}) => {
console.log(item.productId)
 
  return (
    <div
      class="modal  "
      id="mo"      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" >{item.name}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={process.env.PUBLIC_URL + `../assets/${item.image}`}

                  alt="Citron"
                />
              </div>
<br></br>
<div className="col-sm-4">
               
                  <h3 className="price">{item.category.name} </h3> <br />
              
                 
             
             
               
                  <h3 className="price">{item.price} $</h3> <br />
              
                 
             
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-warning"
              data-dismiss="modal"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

 
export default Products
