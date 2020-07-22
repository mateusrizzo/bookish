import React from 'react';
import book_reader from '../../assets/book_reader.svg';
import './style.css';

export default function Home({history}){
    function enterButton(){
        history.push('/search');
    }
    return(
        <>
            <div className="homeText">
                <h1 id="title-home">Bookish</h1>
                <span id="spend-time">Spend less time searching and more time reading</span>
                <button id="discover" onClick={enterButton}>Discover</button>
            </div>
            <div id="image">
                <img src={book_reader}/>
            </div>
        </>
    );
}