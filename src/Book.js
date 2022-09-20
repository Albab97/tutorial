import React from 'react'

// if we use spread operator then, we can use below syntax also
const Book =({img,title,author})=>{
    // const Book = (props)=> {
      // console.log(props);
      // (Destructuting object, can also be done in passing props obj. in parameters)
      // const { img, title, author } = props;
      const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world')
      }
      const complexExample = (author) => {
        console.log(author);
      }
      return <article className="book" onMouseOver={()=>console.log(title)}>
          <img src={img} alt="book image"></img>
          <h1 onClick={()=>{console.log(title);}}>{title}</h1> {//inline function example}
          }<h4>{author}</h4>
          {/* attributes and event handlers */}
          <button type="button" onClick={clickHandler}>reference example</button>
          <button type="button" onClick={()=> complexExample(author)}>more complex example</button>
          {/* {props.children} */}
          {/* {console.log(props)} */}
          {/* <p>{props.job}</p>
          <p>{props.title}</p>
          <p>{props.number}</p> */}
          {/* <p>{6+6}</p> */}
          </article>
    }

export default Book