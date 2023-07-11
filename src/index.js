import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Data1.js";
// import { Getdata } from "./Data1.js";
// ALWAYS IMPORT TO THE TOP
// import banana from "./books";
// import { Book } from "./Book";
//When we include javascript we donot use the extension

//But when we are importing the css we have to use the full
//name along with the extension

import "./index.css";

// function Gretings() { //IT IS COMPONENT IT MUST START WITH CAPITAL LETTER
//     return <h2>My First component </h2>; // WE ARE RETURNING THE HTML
// // }

// function Gretings() { //IT IS COMPONENT IT MUST START WITH CAPITAL LETTER
//     return ( //Evertings in single parent
//     <div>
//         <div>
//     <h2>My First component </h2>
//     </div>
//     <h2> How are you</h2>
//     </div>

//     ); // WE ARE RETURNING THE HTML
// }

// function Gretings() {
//   //IT IS COMPONENT IT MUST START WITH CAPITAL LETTER
//   return (
//     //Short hand <></>
//     <React.Fragment>
//       <div>
//         <div>
//           <h2>My First component </h2>
//         </div>
//         <h2> How are you</h2>
//       </div>
//     </React.Fragment>
//   ); // WE ARE RETURNING THE HTML
// }

//The elements which donot have any closing tag for ex <img> then use=>
//<img />

//Nest Components

// function Gretings() {
//   return (
//     <div>
//       <Person />
//       <Messege />
//     </div>
//   );
// }
// const Person = () => <h2>My First component </h2>;
// const Messege = () => {
//   return <h2> How are you</h2>;
// };

const author = "Jordan Moore";
const title = "Interesting Facts For Curious Mindsss";
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL._AC_UL600_SR600,400_.jpg";

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {/* we pass the props where we call the components */}
//     {/* IF WE DONOT PROVIDE THE PROP WE DID NOT GET ANY VALUE */}
//     {/* FOR EXAMPLE IN THE FIRST COMPONENET WE ONLY PROVIDED THE
//     JOB PROPS SO WE GET ONLY THE DEVELOPER PROPS
//     BUT IN SECOND COMPONENT WE DID NOT GET JOB PROP */}

//       <Book job="developer" />
//       <Book title="random title" number={22} />
//     </section>
//   );
// };

//We cannot add statement inside the jsx
//Adding the props
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={img} alt="human-image" />
//       <h2>
//         {title}
//         {/* {let val=6} it is statement  */}
//         {/* <p>{6+6}</p> it is expression */}
//       </h2>
//       <p> {props.job}</p>
//       <p> {props.title}</p>
//       <p> {props.number}</p>

//       <h4>{author}</h4>
//     </article>
//   );
// };
// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL
// ._AC_UL600_SR600,400_.jpg"
//     alt="human-image"
//   />
// );
// const Title = () => <h2>BlackBook of English Vocabulary</h2>;
// const Author = () => {
//   const inLineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5 rem",
//   };
//   return <h4 style={inLineHeadingStyles}>Nikhil Kr Gupta</h4>;
// };

// const Image = () => (

//   />
// );
// const Title = () => ;
// const Author = () => {
//   const inLineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5 rem",
//   };
//   return <h4 style={inLineHeadingStyles}>Nikhil Kr Gupta</h4>;
// };

// const firstBook = {
//   author: "Nikhil Kr Gupta",
//   img: "https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL._AC_UL600_SR600,400_.jpg",
//   title: "BlackBook of English",
// };
// const secondBook = {
//   author: "Morgan Housel",
//   img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
//   title: "The Psychology of Money",
// };
// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {/* we pass the props where we call the components */}
//       {/* IF WE DONOT PROVIDE THE PROP WE DID NOT GET ANY VALUE */}
//       {/* FOR EXAMPLE IN THE FIRST COMPONENET WE ONLY PROVIDED THE
//     JOB PROPS SO WE GET ONLY THE DEVELOPER PROPS
//     BUT IN SECOND COMPONENT WE DID NOT GET JOB PROP */}

//       <Book
//         author={firstBook.author}
//         img={firstBook.img}
//         title={firstBook.title}
//       />
//       <Book
//         author={secondBook.author}
//         img={secondBook.img}
//         title={secondBook.title}
//       />
//     </section>
//   );
// };
// const Book = (props) => {
//   const {author,img,title}= props;
//   return (
//     <section>
//       {/* <img src={props.img} /> */}
//       <img src={img} />
//       {/* Object destructuring */}

//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </section>
//   );
// };

// Function destructuring

// const Book = ({img,title,author}) => {

//   return (
//     <section>
//       {/* <img src={props.img} /> */}
//       <img src={img} />
//       {/* Object destructuring */}

//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </section>
//   );
// };

// CHILDREN PROPS
// IF WE WANT TO RENDER SOMETHING THAT IS WRITTEN IN THE COMPONENT
// WE USE THE CHILDREN PROPS

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {/* we pass the props where we call the components */}
//       {/* IF WE DONOT PROVIDE THE PROP WE DID NOT GET ANY VALUE */}
//       {/* FOR EXAMPLE IN THE FIRST COMPONENET WE ONLY PROVIDED THE
//     JOB PROPS SO WE GET ONLY THE DEVELOPER PROPS
//     BUT IN SECOND COMPONENT WE DID NOT GET JOB PROP */}

//       <Book
//         author={firstBook.author}
//         img={firstBook.img}
//         title={firstBook.title}
//       >
//         {/* WE WRITE INSIDE THE COMPONENTS TAG */}
//         <p> Hello my name is anshul</p>
//         <button>Click Me</button>
//       </Book>
//       <Book
//         author={secondBook.author}
//         img={secondBook.img}
//         title={secondBook.title}
//       />
//     </section>
//   );
// };

// WHILE USING THE CHILDREN PROPS IN FUNCTION DESTURING WE
// USE THE "children" PROP STRICTLY
// const Book = ({ img, title, author, children }) => {
//   //  we can also donot use the function destructuring then we
//   // can write props.children
//   return (
//     <section>
//       {/* <img src={props.img} /> */}
//       <img src={img} />
//       {/* Object destructuring */}

//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </section>
//   );
// };

const books = [
  {
    author: "Nikhil Kr Gupta",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL._AC_UL600_SR600,400_.jpg",
    title: "BlackBook of English",
    id: 1,
  },
  {
    author: "Morgan Housel",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
    title: "The Psychology of Money",
    id: 2,
  },
];

// When you render the items in react.React need the
// track of the items

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {/* WE CANOT USE THE OBJECT DIRECTLY IN THE
//       JSX */}
//       {/*WE USE THE METHOD WHICH WILL ITERATE OVER THE PROPERTIES
//       AND ONE BY ONE WE WILL PASS IT TO THE BOOK COMPONENTS  */}

//       {/* {newNames} */}

// {books.map((book)=>{
//    const { img,title,author}=book
// return(

//   // <div>
//   //   <h2>{book.author}</h2>
//   // </div>
// <Book img={img} title={title} author={author}

//  key={id} ></Book>
// )
// })}

//     </section>
//   );
// };

// VERY IMPORTANT QUESTION WHERE TO PUT THE ID
//ALWAYS ALWAYS ALWAYS PUT THE ID WHERE YOU ARE ITERATING THE
// OVER THE DATA AND THEN WE HAVE TO SET WHERE YOU ARE RETURNING
// THE DATA
//

// const Book = (props) => {
//   //  we can also donot use the function destructuring then we
//   // can write props.children
//   const {img,title,author}=props
//   return (
//     <section>
//       {/* <img src={props.img} /> */}
//       <img src={img} />
//       {/* Object destructuring */}

//       <h2>{title}</h2>
//       <h4>{author}</h4>

//     </section>
//   );
// };

//******** PASSING THE WHOLE OBJECT AS A PROP********

// THERE ARE TWO WAYS TO PASS THE WHOLE OBJECT EITHER WITH HELP OF THE PROP
// OR WITH THE HELP OF SPREAD OPERATOR

// const Booklist = () => {
//   return (
//     <section className="booklist">

//       {books.map((book) => {
//         const { img, title, author, id } = book;
//         return (
//           // <div>
//           //   <h2>{book.author}</h2>
//           // </div>
//           // Passing the entire object
//           <Book book={book} key={id}></Book>
//         );
//       })}
//     </section>
//   );
// };

// By the help of Spread Operator

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         const { img, title, author, id } = book;
//         return (
//           // <div>
//           //   <h2>{book.author}</h2>
//           // </div>
//           // Passing the entire object
//           <Book {...book} key={id}></Book>
//         );
//       })}
//     </section>
//   );
// };

// const Book = (props) => {
//   // const { img, title, author } = props.book;
//   const { img, title, author } = props;

//   return (
//     <section>
//       {/* <img src={props.img} /> */}
//       <img src={img} />
//       {/* Object destructuring */}

//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </section>
//   );
// };

// *************EVENTS*****************

// * Similar approach like in  the Vanilaa js
// * JUST USE THE CAMEL CASE

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <EventExamples />
//     </section>
//   );
// };

// const EventExamples = () => {
//   const handleFormInput = () => {
//     alert("Hand from input");
//   };
//   const handleButtonClick = () => {
//     alert("Button clicked");
//   };
//   const handleFormSubmit = (e) => {
//     // IT WILL NOT SHOW THE CONSOLE BECAUSE IT'S DEFAULT VALUE IS
//     // TO SEND THOSE VALUE TO THE URL
//     // SO FOR THAT WE WANT TO EXCESS THE EVENTS
//     e.preventDefault();
//     console.log("Form subimitted");
//   };

//   return (
//     <section>

//       {/* VERY IMPORTANT INFORMATION ABOUT FORMS EVENTS */}

//       {/* VERY IMPORTANT THING IS THAT IF WE ARE DEFINING THE BUTTON WITH
// // TYPE SUBMIT INSIDE THE FORM SO IF WE PRESS THE BUTTON
// // THE EVENT LISTENER WILL WE CALLED */}

//       {/*  IF FOR SOME REASON WE WANT TO REMOVE THE EVENT LISTENER FROM THE FORM
// SUBMISSION AND ONLY WANT TO PLACE IT IN BUTTON THEN WE HAVE TO
// USE THE ONCLICK EVENTLISTENER NOT THE ONSUBMIT BECAUSE ONSUBMIT WILL NOT WORK OTHER THAN THE FORMS
// */}

//       {/* <form onSubmit={handleFormSubmit}> */}
//       {/* LETS SAY WE REMOVE THE FORM EVENT LISTENER */}
//       <form>
//         <h2> Typical form</h2>
//         <input
//           type="text"
//           name="example"
//           // onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         ></input>
//         {/* IT HAS TYPE SUBMIT THAT IS THE EVENTLISTENER IS CALLED */}

//         {/* <button type="submit" onSubmit={handleFormSubmit}>Click Me</button>   THIS WILL NOT WORK */}
//         {/* WE HAVE TO USE THE ONCLICK EVENTLISTENER */}
//         <button type="submit" onClick={handleFormSubmit}>
//           Click Me
//         </button>

//         <div>
//           <button onClick={handleButtonClick}>Click Me</button>
//         </div>
//       </form>
//     </section>
//   );
// };

// HERE WE HAVE CALLED THE EVENTS IN THE FUNCTION BUT WE CAN CALL IT
// USING THE ANONMOUS FUNCTION

// const EventExamples = () => {
//   const handleFormInput = () => {
//     alert("Hand from input");
//   };
//   const handleButtonClick = () => {
//     alert("Button clicked");
//   };
//   const handleFormSubmit = (e) => {
//     // IT WILL NOT SHOW THE CONSOLE BECAUSE IT'S DEFAULT VALUE IS
//     // TO SEND THOSE VALUE TO THE URL
//     // SO FOR THAT WE WANT TO EXCESS THE EVENTS
//     e.preventDefault();
//     console.log("Form subimitted");
//   };

// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2> Typical form</h2>
//         {/* THE ANONMOUS FUNCTION */}
//         <button type="submit" onClick={() => console.log("Hello There")}>
//           Click Me
//         </button>
//       </form>
//     </section>
//   );
// };

// const Booklist = () => {
//   const someValue = "ShakeandBake";
//   const displayValue = () => {
//     console.log(someValue);
//   };
//   return (
//     <section className="booklist">
//       <Book {...books} displayValue={displayValue} />
//     </section>
//   );
// };

// const Book = (props) => {
//   const { img, title, author, displayValue } = props;

//   return (
//     <section>
//       <img src={img} />
//       <button onClick={displayValue}>Click ME</button>

//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </section>
//   );
// };

// WHAT HAPPEN IF WE CALL A EVENTLISTENER FUNCTION WHICH WANT A
// A PARAMETRE BUT WE CANNOT PASS THE PASSMETER WHILE CALLING THE FUNCTION IN THE EVENTLISTENER
// BECAUSE IT WILL IMMEDIATELY EXECUTE THE FUNCTION

// TO SOLVE THIS ISSUE THERE ARE TWO FIXES FIRST ONE IS TO CALL THE A FUNCTION THEN CALL THE MAIN FUNCTION
// ********LETS SEE**********

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         const { img, title, author, id } = book;
//         return (
//           // <div>
//           //   <h2>{book.author}</h2>
//           // </div>
//           // Passing the entire object
//           <Book {...book} key={id}></Book>
//         );
//       })}
//     </section>
//   );
// };

// const Book = (props) => {
//   const { img, title, author, id } = props;
//   // const getSinglebook = () => {
//   //   getbook(id);
//   // };
//   return (
//     <section>
//       <img src={img} />

//       {/* HERE IT WILL IMMEDIATELY INVOKE THE FUNCTION SO TO SOLVE THIS THERE ARE THE TWO FIXES */}
//       {/* <button onClick={getbook(id)}>Click ME</button> */}
//       <button
//         onClick={(id) => {
//           const getbook = (id) => {
//             const book = books.find((book) => book.id === id);
//             console.log("heelo");
//           };
//         }}
//       >
//         Click ME
//       </button>

//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </section>
//   );
// };

// NOW WE ARE GOING TO USE THE MODULES ES6 TO BREAK THE LOGIC INTO DIFFERENT PAGES AND TO MAKE THE CODE TO LOOK PERFECT

// HERE WE USE THE CURLY BRACES BECAUSE WE WANTED ONLY THE SPECIGIC ITEM TO BE
// INCLUDE FROM THE SOURCE FOLDER
// THE NAME OF THE EXPORTS MUST BE SAME NAME WHILE EXPORTING

// import {books} from "./books"

// WHILE EXPORTING THE DEFAULT FILE
// import banana from "./books";

// const Booklist = () => {
//   const getbook = (id) => {
//     const book = banana.find((book) => book.id === id);
//     console.log(book);
//   };
//   return (
//     <section className="booklist">
//       {banana.map((book) => {
//         const { img, title, author, id } = book;
//         return (
//           // <div>
//           //   <h2>{book.author}</h2>
//           // </div>
//           // Passing the entire object
//           <Book {...book} key={id}></Book>
//         );
//       })}
//     </section>
//   );
// };

// const Book = (props) => {
//   const { img, title, author, id } = props;
//   const getSinglebook = () => {
//     getbook(id);
//   };
//   return (
//     <section>
//       <img src={img} />
//       <h4> {title}</h4>
//       <h2> {author}</h2>

//       {/* HERE IT WILL IMMEDIATELY INVOKE THE FUNCTION SO TO SOLVE THIS THERE ARE THE TWO FIXES */}
//       {/* <button onClick={getbook(id)}>Click ME</button> */}
//       <button onClick={getSinglebook}>Click ME</button>

//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </section>
//   );
// };

// ***********IMPORTIMG THE LOCAL IMAGES FROM THE FOLDER***************
// ************WHY TO USE IT**************

// BETTER PERFORMANCE BECAUSE OPTIMISED

// IMPORT IMG1 FROM "./images/book-1.jpg"
//

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        const { img, title, author, id } = book;
        return (
          // <div>
          //   <h2>{book.author}</h2>
          // </div>
          // Passing the entire object
          <Book {...book} key={id} number={index}></Book>
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, id, number } = props;
  // const getSinglebook = () => {
  //   getbook(id);
  // };
  return (
    <section>
      <img src={img} />
      {/* <h2>{title}</h2>
      <h4>{author}</h4> */}

      {/* HERE IT WILL IMMEDIATELY INVOKE THE FUNCTION SO TO SOLVE THIS THERE ARE THE TWO FIXES */}
      {/* <button onClick={getbook(id)}>Click ME</button> */}
      {/* <button
        onClick={(id) => {
          const getbook = (id) => {
            const book = books.find((book) => book.id === id);
            console.log("heelo");
          };
        }}
      >
        Click ME
      </button> */}

      <h2>{title}</h2>
      <span className="number">{`#${number + 1}`}</span>
      <h4>{author}</h4>
    </section>
  );
};

// **********NOW WORK ON THE PRODUCTION APPLICATION **********
// WHEN WE WANT TO DEPLOY OUR APPLICATION THE SETUP IS BIT DIFFERENT
// STOP THE DEVELOPEMENT FOLDER CTRL +C
// RUN "NPM RUN BUILD"
// BUILD FOLDER GETS CREATED

// BUILD FOLDER WILL GET CREATED
// FOR HOSTING WE ARE USING THE NETLIFY

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
