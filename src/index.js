import React from "react";
import ReactDOM from "react-dom";
import './index.css'
// import statements
import {books} from './books'
import Book from './Book'
import {greeting} from './testing/testing'
// const author = 'Joseph Murphy'
// const title = 'The Power of Your Subconcious Mind'
// const img = "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg" 

// function Greeting(){
//   return <h4>Hi this is my first component</h4>;
// }

// const Greeting = ()=> {
//   return React.createElement('h1',{},'hello world');
// }

// JSX Rules 
// always return single element -> div/section/article/Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting (use parenthesis)

function Greeting(){
  return (
    <div>
      <h1>yo wassup</h1>
      <ul>
        <li>Hey yo</li>
      </ul>
      <img src="" alt=""/>
      <input type="text" placeholder="enter"/>
    </div>
    );
}

// const Greeting = ()=>{
//   return React.createElement('div',{},
//   React.createElement('h1',{},'hello everybody'));
// }

//Nested components

function BookList(){
  console.log(greeting);
  return (
    <section className="booklist">
      {/* <Book 
        img={firstBook.img} 
        title={firstBook.title}
        author={firstBook.author}
      /> */}
      {books.map((book,index)=>{
        // const {img, title, author} = book;
        return (
          // <Book key={book.id} book={book}></Book>
          //spread operator below which indicates spreading all the properties of book. Now we can use props in Book function
          <Book key={book.id} {...book}></Book>
        )
      })}
        {/* children props */}
        {/* <p>Lorem Ipsum is simply dummy text of the printing s srype but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Book> */}
      
    </section>
  );
}

// const Image = ()=> {
//   return <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg" alt="book image"></img>
// }
// const Title= () => <h1>The Power of Your Subconcious Mind</h1>
// const Author=() => <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>Joseph Murphy</h4>

// React Tools -> see in components section in browser all the components
//JSX CSS -> inline CSS is more powerful than the usual css.
ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);

