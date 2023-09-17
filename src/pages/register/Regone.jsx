import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Numbers from '../../components/numbers/Numbers'
import './register.scss'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
    
  },
  '& .MuiInputBase-input': {
    // borderRadius: 4,
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid #000',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    // '&:focus': {
    //   borderRadius: 4,
    //   borderColor: '#80bdff',
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    // },
  },
}));

const Regonef = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {/* Register page one */}
        <Navbar/>
        <section className='register'>
            <Numbers one='it' />
            <div className="title">
                <h2>Tell us how we can help you</h2>
                <p>I am looking for care on behalf of :</p>
            </div>
            {/* dropdown will be added soon */}
            <div className="drop">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='formcontrol' >
                <InputLabel id="demo-simple-select-standard-label" >Please select</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Please select"
                  className='select'
                  input={<BootstrapInput />}
                >
                  <MenuItem className='menuitem' value={'Myself'}>Myself</MenuItem>
                  <MenuItem className='menuitem' value={'My parents'}>My parents</MenuItem>
                  <MenuItem className='menuitem' value={'My spouse'}>My spouse</MenuItem>
                  <MenuItem className='menuitem' value={'A friend'}>A friend</MenuItem>
                  <MenuItem className='menuitem' value={'Other'}>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Link to={'/register/steptwofirst'}><button className="button">Next</button></Link>
        </section>
        <Footer/>
    </div>
  )
}

export default Regonef