import "./App.css";
// import { useState } from 'react';

const Person = (props) => {
  return <>
   <h1>
     First Name : {props.name}
   </h1>
   <h1>
    Last Name : {props.lname}
   </h1>
   <h1>
    Age : {props.age}
   </h1>
   
  
  
  </>;
};

const App = () => {
  const name = "Rahul";
  // const  isLoggedIn = true;
  // const [counter ,setCounter ] = useState(0);
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

            {/* <h2>
              Counter
            </h2>
            <button onClick={()=> setCounter()}> + </button>
            <h1>
              {counter}
            </h1>
            <button> - </button> */}
          </section>
          <Person 
          name = 'Rahul'
          lname = "Babu"
          age = {20}
          />
         
         <Person 
          name = 'suii'
          lname = "hehe"
          age = {10}
          />

        </main>
      </div>
    </>
  );
};

export default App;
