import React from 'react'
import './zipform.scss'
import SearchIcon from '@mui/icons-material/Search';

const Zipform = () => {
  return (
    <div>
        <div className="zip">
            <input type='text' placeholder='Enter ZIP code/city, state ' /><button><SearchIcon/></button>
        </div>
    </div>
  )
}

export default Zipform