import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Input, Button } from 'semantic-ui-react';
import { getInputData, getFetchData } from './redux/Action';
import { useDispatch } from 'react-redux';
function Header() {
  const dispatch = useDispatch();
  const [searchval, setSearchval] = React.useState("");
   
  useEffect(() => {
    if (searchval.length >= 3) {
      dispatch(getInputData(searchval))
    }
  }, [searchval, dispatch])
  
  const handleClick =()=>{
    dispatch(getFetchData(searchval))
  }

  return (
    <div className='header'>
      <Link to="/"><h1>streamy</h1></Link>
      <div>
        <Input onChange={e => setSearchval(e.target.value)} size="large"/>
        <Button onClick={handleClick} content="submit" primary size="large"/>
      </div>
      <Link to="/login"><Button content="Login" primary size="large"/></Link>
    </div>
  )
}

export default Header