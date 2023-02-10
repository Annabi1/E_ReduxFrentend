import * as React from 'react';
import './../styles/App.css';
import  { useState } from 'react';
const Products = props => {

  const{data,category}=props
  

   return (
      <div class="contenair " >
  <div className="row">
    {data.filter(cat=>category).map((item, i) => {

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
              <button className="btn btn-warning btn-sm" data-toggle="modal" data-target="#mo">voir produit</button>
           

            </div>
          </div>
        </div>
      </div>
      <Modal item={item} />
    </div>
      );
    })}
  </div>

</div>
   )
};
export const Modal = ({item}) => {

 
  return (
    <div
      class="modal fade "
      id="mo"
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">fgxhfgh</h5>
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
                  src={
                    process.env.PUBLIC_URL +
                    `../assets/`
                  }
                  alt="Citron"
                />
              </div>

              <div className="col-sm">
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                  <h3 className="price">ghghgj</h3> <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                   
                    type="button"
                    className="btn btn-secondary">
                    -
                  </button>
                    <span className="btn btn-light qty"></span>
                  <button
                  
                    type="button"
                    className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
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
              class="btn btn-success"
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
