import React from 'react';
import './card.scss';

function BookCard(props){
    return(
        <>
        <div className="book-cards">
            <div className="book-card">
                <img src={props.img} alt=""  className="card-img"/>
                <div className="book-info">
                    <h3 className="book-title">{props.bookTitle}</h3>
                    <span className="text">by {props.author}</span>
                    <h4 className="book-price">Rs. {props.price}</h4>
                    <div className="buttons">
                        <button className="button-cart">ADD TO CART</button>
                        <button className="button-wishlist">WISHLIST</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BookCard;