import'./App.css';
import { useState } from 'react';

const App =  ()=> {
  // const name = "Rahul";
  // const  isLoggedIn = true;
  const [counter ,setCounter ] = useState(0);
  return (
    <>
      <div>
        {/* <h1>Hello {isLoggedIn ? name: "Hii"}</h1> */}
        <main>
          <section>
            <h2>
              Counter
            </h2>
            <button onClick={()=> setCounter()}> + </button>
            <h1>
              {counter}
            </h1>
            <button> - </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
