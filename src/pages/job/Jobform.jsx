import React from 'react'
import './job.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Backnext from '../../components/backnext/Backnext'
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
    borderBottom: '1px solid #000',
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

const Jobform = () => {

	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<div>
			<Navbar/>
			<section className="register">
				<div className="title">
					<h2>Join Our Team</h2>
				</div>
				<form action="">
					<div className="info">
						<div className="f">
							<label htmlFor="">*First Name</label><br />
							<input type="text" />
						</div>
						<div className="f">
							<label htmlFor="">*Last Name</label><br />
							<input type="text" />
						</div>
						<div className="f">
							<label htmlFor="">*Email Address</label><br />
							<input type='email' />
						</div>
						<div className="f">
							<label htmlFor="">Mobile Number</label><br />
							<input type='tel' />
						</div>
						<div className="f">
							<label htmlFor="">Gender</label><br />
							<div className="dropdown">
								<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='formcontrol' >
									<InputLabel id="demo-simple-select-standard-label" ></InputLabel>
									<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={age}
									onChange={handleChange}
									label="Please select"
									className='select'
									input={<BootstrapInput />}
									>
										<MenuItem value="">
											<div className="item">
												<em>Select your Gender</em>
												<div className="circle"></div>
											</div>
										</MenuItem>
										<MenuItem className='menuitem' value={'Male'}> <div className="item">Male <div className="circle"></div></div> </MenuItem>
										<MenuItem className='menuitem' value={'Female'}> <div className="item">Female <div className="circle"></div></div> </MenuItem>
										<MenuItem className='menuitem' value={'Other'}> <div className="item">Other <div className="circle"></div></div> </MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
						<div className="f">
							<label htmlFor="">Date Of Birth</label><br />
							<input type='date' />
						</div>
						<div className="f">
							<label htmlFor="">*Address</label><br />
							<input type='text' />
						</div>
						<div className="f">
							<label htmlFor="">*Job status</label><br />
							<div className="dropdown">
								<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='formcontrol' >
									<InputLabel id="demo-simple-select-standard-label" ></InputLabel>
									<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={age}
									onChange={handleChange}
									label="Please select"
									className='select'
									input={<BootstrapInput />}
									>
										<MenuItem value="">
											<div className="item">
												<em>Select your Job Status</em>
												<div className="circle"></div>
											</div>
										</MenuItem>
										<MenuItem className='menuitem' value={'Employed'}> <div className="item">Employed <div className="circle"></div></div> </MenuItem>
										<MenuItem className='menuitem' value={'Unemployed'}> <div className="item">Unemployed <div className="circle"></div></div> </MenuItem>
										<MenuItem className='menuitem' value={'Self-Employed'}> <div className="item">Self-Employed <div className="circle"></div></div> </MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
						<div className="f">
							<label htmlFor="">*Years of experience</label><br />
							<input type='number' />
						</div>
						<div className="f">
							<label htmlFor="">Last type of job</label><br />
							<input type='text' />
						</div>
						<div className="f">
							<label htmlFor="">Most recent qualification</label><br />
							<input type='text' />
						</div>
						<div className="f">
							<label htmlFor="">*How do you prefer we contact you</label><br />
							<input type='text' />
						</div>
					</div>
					<div className="check">
						<input type="checkbox" />
						<p>*I consent to have Right at Home collect my name, phone number, email and comments.</p>
					</div>
				</form>
				<Backnext back='/jobs' next='/'/>
			</section>
			<Footer/>
		</div>
	)
}

export default Jobform