import React from 'react';
import '../home-page/home-page.scss';
import Card from '../card/card.jsx';
import Header from '../header/Header.jsx';
import BookStoreService from '../../service/BookStoreService';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bookData : []
        };
        this.bookStoreService = new BookStoreService();
    }

    render() {
        return(
            <>
            <Header/>
            <div className="book-details">
                <h3 className="heading">Books</h3>

                <Card></Card>
            </div>
            </>
        )
    }
}

export default HomePage;