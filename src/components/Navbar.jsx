import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('')

  const handleSubmit= e =>{
    e.preventDefault();
    setKeyword('');
    e.target.reset();
    navigate(`/search?keyword=${keyword}`);
  }
  return (
    <div>
    
      <hr />
        <Link to='/'>Home</Link>{" "}
        <Link to='aboutus'>About us</Link>{" "}
        <Link to='products'>Products Page</Link>{" "}
        <form onSubmit={handleSubmit} 
              style={{display:"inline-flex"}}>
          <input 
          type="text" 
          placeholder="Search" 
          defaultValue={keyword}
          onChange={e=> setKeyword(e.target.value)} />
          <button type="submit">Find!</button>
        </form>

      <hr />
    </div>
  )
}

export default Navbar