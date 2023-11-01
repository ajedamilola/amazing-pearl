import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import ellipse1 from '../../img/Ellipse1.png'
import ellipse2 from '../../img/Ellipse2.png'
import ellipse5 from '../../img/Ellipse5.png'
import { motion } from 'framer-motion'
import './sign.scss'
import axios from 'axios'
import { Loading, Report } from 'notiflix'

const Sign = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "", phone: "", address: "", public: true, type: 0 })
    // const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    function handleChange(e) {
        const d = { ...form }
        d[e.target.name] = e.target.value
        setForm(d)
    }
    return (
        <div id='signpg'>
            <Navbar />
            <img id='b1' src={ellipse1} alt="" />
            <img id='b2' src={ellipse2} alt="" />
            <motion.div id='b6' initial={{ x: '50%' }} animate={{ x: '0' }} transition={{ duration: 1.5, type: 'spring' }}  ><img src={ellipse5} alt="" /></motion.div>
            <img id='b5' src={ellipse2} alt="" />
            <section className='signpg'>
                <h1>Join to find <span>Care.</span> </h1>
                <div className="signup">
                    <form onSubmit={async e => {
                        e.preventDefault()
                        const data = new FormData()
                        Object.keys(form).forEach(key => data.append(key, form[key]))
                        Loading.standard("Seding registration request")
                        try {
                            const { err } = (await axios.post("/api/beneficiary", data, { withCredentials: true })).data
                            if (!err) {
                                Report.success("Success", `Registration successful please store the following info in a safe place email:${form.email} password:${form.password}`, "Copy Details", () => {
                                    navigator.clipboard.writeText(`email:${form.email} password:${form.password}`)
                                    navigate("/")
                                })
                            } else {
                                Report.failure("Error", err)
                            }
                        } catch (error) {
                            console.log(error)
                            Report.failure("Connection error", "Unable to connect to servers check internet connection and try again")
                        }finally{
                            Loading.remove()
                        }
                    }}>
                        <div className="details">
                            <label htmlFor="">First Name*:</label><br />
                            <input required type="text" value={form.name} name="name" onChange={handleChange} />
                        </div>
                        <div className="details">
                            <label htmlFor="">Address*:</label><br />
                            <textarea required type="text" value={form.address} name="address" onChange={handleChange} />
                        </div>
                        <div className="details">
                            <label htmlFor="">Email*:</label><br />
                            <input required type="email" value={form.email} name="email" onChange={handleChange} />
                        </div>
                        <div className="details">
                            <label htmlFor="">Phone Number*:</label><br />
                            <input required type="tel" value={form.phone} name="phone" onChange={handleChange} />
                        </div>
                        <div className="details">
                            <label htmlFor="" >Password*:</label><br />
                            <input required placeholder='Choose password' value={form.password} name="password" onChange={handleChange} />
                        </div>
                        {/* <div className="details">
                            <label htmlFor="" >Registrant Type*:</label><br />
                            <select required value={form.type} name="type" onChange={handleChange}>
                                <option>Bene</option>
                            </select>
                        </div> */}
                        <div className="details">
                            <label htmlFor="" >Choose Profile:</label><br />
                            <input placeholder='Choose password' accept="image/jpeg, image/png, image/webp, image/jfif, image/bmp" type="file" onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setForm({ ...form, image: e.target.files[0] })
                                }
                            }} />
                        </div>
                        {/* <Link to={'/register/stepone'} ><input id='reg' type="submit" value='Register' /></Link> */}
                        <input id='reg' type="submit" value='Register' />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Sign