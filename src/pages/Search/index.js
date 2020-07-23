import React, {useState, useEffect} from 'react';
import './style.css';
import { Icon } from '@iconify/react';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';
import axios from 'axios';

export default function Search(){
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const key = 'AIzaSyBwjF6e-Eo1shoFRE2Q2-f9W6iP5JMPlzY';
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}&maxResults=40`)
            .then(response => {
                setBooks(response.data.items);
            })
    }, [search])
    useEffect(() => {
        console.log(books);
        RenderBooks();
    }, [books])
    function RenderBooks(){
        return(
            <>
                {books.map(books => (
                    <li key={books.id}>
                        {books.volumeInfo.imageLinks === undefined ? '':<a href={books.volumeInfo.infoLink} target="_blank"><header style={{backgroundImage: `url(${books.volumeInfo.imageLinks.smallThumbnail})`}}/></a>}
                        <span className="bookInfo">{books.volumeInfo.title}</span>
                        <span className="bookInfo">{books.volumeInfo.author}</span>
                        <span className="bookInfo">{books.volumeInfo.pageCount ? books.volumeInfo.pageCount + ' páginas': ''}</span>
                    </li>
                ))}
            </>
        )
    }
    function SearchBooks(event) {
            event.preventDefault();
            setSearch(event.target.searchQuery.value);
        }   
    return(
        <>
        <h1 id="title-search">Bookish</h1>
        <div id="form_container">
        <span id="search-label">Find your next reading obsession</span>
            <form id="search_form" onSubmit={SearchBooks}>
                <input type="text" 
                placeholder="Search by name, author, genre, etc..." 
                required 
                id='searchQuery'/>
                <button type="submit" id="searchbtn">
                    <Icon icon={searchOutlined}/>
                </button>
            </form>
        </div>    
            <ul id="results">
                {books ? <RenderBooks/> : ''}
            </ul>
        
        </>
    )
}