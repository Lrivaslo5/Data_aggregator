import './Navbar.css'
import { useState, useEffect } from 'react'



function Search() {
  const [Text, setText] = useState('')


  function testFunc(){
    //implment search functionality using Text state
    setText('')
    console.log('worked')
  }
  
// this snippet allows us to submit search query using enter button
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        testFunc(); // this funciton is called after pressing enter
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  
    return (
        <input           
          className='bar__searchbar'
          type={'text'}
          value={Text}
          placeholder={'Search by ID'}
          onChange={event => {setText(event.target.value)}}>
        </input>
        
    )
}


export default Search
  