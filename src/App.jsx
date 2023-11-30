import "./App.css";
import { useState, useEffect } from "react";

const Person = (props) => {
  return (
    <>
      <h1>First Name : {props.name}</h1>
      <h1>Last Name : {props.lname}</h1>
      <h1>Age : {props.age}</h1>
    </>
  );
};

const App = () => {
  const name = "Rahul";
  // const  isLoggedIn = true;
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((prevCount) => {
       return prevCount + 1;
    });
  };
  const reduceCounter = () => {
    setCounter((prevCount) => {
      return prevCount -1;
  });
}


//! shows alert when page is loaded
//! useEffect is similar to watch and computed in vue
// useEffect(()=>{
//   alert("HOO")
//! counter = 100; cannot update like this because its a part of react State  
// })


//! this code block means that whenever we change the counter  the code inside the block works
useEffect(()=>{
alert("Clicked")
},[counter])  //! The dependency array [counter] indicates that the effect should run whenever the counter value changes.
//!With this setup, the useEffect will be triggered whenever the counter value changes, showing the alert with "Clicked".
  return (
    <>
      <div>
        {/* <h1>Hello {isLoggedIn ? name: "Hii"}</h1> */}
        <main>
          <section>
            {
              //  curly braces is  used to write javascript here
              name ? (
                <>
                  <h1> {name}</h1>
                </>
              ) : (
                // <h1>
                //   Hello
                // </h1>
                // <h2></h2>      Adjacent jsx elements without <>  </>  causes errors
                <>
                  <h2>Hello</h2>
                  <h1>Hiii</h1>
                </>
              )

              //! Explanation of this braces
              // if there is a value for name then print test
              //else print the h1 and h2
              //<.>  </>  this means an empty div
            }

            <h2>Counter</h2>
            <button onClick={updateCounter}> + </button>
            <h1>{counter}</h1>
            <button onClick={reduceCounter}> - </button>
          </section>
          <Person name="Rahul" lname="Babu" age={20} />

          <Person name="suii" lname="hehe" age={10} />
        </main>
      </div>
    </>
  );
};

export default App;
