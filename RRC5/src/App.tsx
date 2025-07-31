import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";
// Below: this import allows 'hooks' to be used in react
import { useState, useEffect } from "react";

import Counter from './components/Counter.jsx';







function App() {
  
  // By default we want the Popup to have 'false' by 'default'
  //let popupOpen = false
  // useState(false) 
  // Above: this will return an array with two values, so use array destructuring [], to directly grab those two values out of it 
  //
  // the 2nd value, setPopupOpen, is fuction used to change the value of the 1st variable, popupOpen, 
  // when the btn is clicked, the false turns into true. 

  // const [state, setState] = useState(false)
  // setSate: Function that changes the 'state'
  // fasle: is the dafault value
  
  /**
   * 1. Create a Counter component
   * 2. Create the 'count' with a default value of 0
   * 3. Create a button to ..increase the count. 
   * 4. Create a button to ..decrease the count.
   * 5. Create a button to ..reset    the count.
   * 6. Render your Counter component in App.jsx
   */
  //...
  // return <Counter /> 

  const [popupOpen, setPopupOpen] = useState(false);

  function togglePopup() {
    setPopupOpen(true)
    console.log('parent notified!')
  }

  function closePopup() {
    setPopupOpen(false);
  }

  useEffect(() => {

  }, [])


  return (
    <>
      <TodoTitle />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}
        />
        <button onClick={() => setPopupOpen(true)}>Add to do </button>
      </div>
      <Todo togglePopup={togglePopup} 
      task="Learn React"
      />
      <Todo togglePopup={togglePopup} 
      task="Finsih ASAP Frontend"
      />
      <Todo togglePopup={togglePopup} 
      task="Land Junior Job"
      />
      <Todo togglePopup={togglePopup} 
      task="Earn $100k+"
      />
      { popupOpen && <Popup closePopup={closePopup} title="Are you 100% sure?"/> }
      {/*{ popupOpen ? <Popup title="Are you 100% sure?"/> : null } */}
      {/* { popupOpen && <Popup title="Are you 100% sure?"/> } */}
      {/* Above: they do the same thing */}

    </>
  );
}

export default App;
