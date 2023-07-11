import { useState } from "react";
import Getdata from "./Getdata1";
// import { data } from "../data";

// import "./App.css";

function App() {
  // IN CONSOLE.LOG EVERYTHING IS HAPPENING QUIET SMMOTHLY
  // IT IS SHOWING THE INCREASED COUNT VALUE BUT IN THE BROWSER
  // IT IS NOT UPDATING THE VALUE BUT WHAT IS THE PROBLEM

  // *************USE STATE BASICS ********************

  // #######USE STATEHOOKS
  // IT RETURNS AN ARRAY WITH TWO ELEMENTS THE CURRENT STATE VALUE, AND A FUNCTION THAT WE CAN USE TO UPDATE THE STATE
  // NOW THE FUNCTION-
  // - ACCEPTS THE DEFAULT VALUS AS A ARGUMENTS
  // -STATE UPDATE TRIGGERS RE-RENDER
  // -ITS USE STATE VALUE WIIL BE PRESERVED
  // -FOR EXAMPLE IF WE HAVE THE THE 5 DAFAULTS VALUE AND WE CHANGES ONLY THE FIRST ONE OTHERS WILL NOT CHANGES

  // #####INITIAL RENDER AND RERENDER
  // IN A REACT APPLICATION THE INITIAL RENDER IS THE FIRST TIME THE COMPONENT   TREE IS RENDERED TO THE DOM.IT
  // HAPPENS WHEN THE APPLICATION FIRST LOADS,OR WHEN THE ROOT COMPONENT IS FIRST RENDERED.THIS IS ALSO KNOWN AS MOUNTING THE COMPONENTS
  // RE-RENDERS,ON THE OTHER HAND,HAPPEN WHEN THE COMPONENT'S STATE OR PROPS CHANGE AND THE COMPONENTS NEED TO BE UPDATED IN THE DOM TO REFLECT THESE CHANGES.REACT USES A VIRTUAL DOM TO OPTIMIZE THE PROCESS OF UPDATING THE ACTUAL DOM,SO THAT ONLY THE NECESSARY CHANGES ARE MADE

  // THERE ARE FEW WAYS THAT YOU CAN RERENDER IN THE REACT COMPONENTS
  // - BY CHANGING THE COMPONENT'S STATE OR PROPS.REACT WILL RERENDER                  THE COM PONENTS TO REFELCTS THESE CHANGES
  // -WHEN THE PARENT ELEMENT RE-RENDER EVEN IF THE COMPONENT'S STATE OR PROPS HAVE NOT CHANGED

  // #####GENERAL RULE OF HOOKS
  // - Starts with  "use"  (both -react and custom hooks
  // -component must be in uppercase
  // -invoke inside the function/component body
  // -don't call hooks conditionally (cover later)
  // example- WE CANOT DO IT LIKE THIS
  // if(condition){
  //     usestate{}
  // -set function don't update state immediately (cover later)

  const [count1, setCount] = useState(0); //ARARY DESTRUCTURING
  //IT IS DEFAULT VALUE

  let count = 0;
  const handleClick = () => {
    setCount(count1 + 1);
  };

  return (
    <div>
      <h2>{count1}</h2>
      <button type="button" onClick={handleClick}>
        increase
      </button>
      <h1>HELLO MY FRIEND</h1>
      <h2> Hello my friend 1</h2>
      <Getdata name={"Anshul"} />
    </div>
  );
}

export default App;
