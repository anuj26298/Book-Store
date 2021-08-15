import React from 'react';
import './card.scss';
import BookStoreService from "../../service/BookStoreService";

function BookCard(props){

    return(
        <>
            { props.bookDetails.map((book)=>(
                <div className="book-cards">
                    <div className="book-card">
                        <img src={book.image} alt="" className="card-img"/>
                        <div className="book-info">
                            <h3 className="book-title">{book.title}</h3>
                            <span className="text">by {book.author}</span>
                            <h4 className="book-price">Rs. {book.price}</h4>
                            <div className="buttons">
                                <button className="button-cart">ADD TO CART</button>
                                <button className="button-wishlist">WISHLIST</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default BookCard;