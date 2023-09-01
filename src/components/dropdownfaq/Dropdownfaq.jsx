import React, { useState } from 'react'
import './dropdownfaq.scss'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import {Link} from 'react-router-dom'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const data = [
  {
    question: 'Client Care Managers',
    answer: 'You’ll have a dedicated Client Care Manager (CCM) who leads your Care Team and works directly with you, keeping you informed and ensuring your ongoing satisfaction.'
  },
  {
    question: 'Staffing Managers',
    answer: 'Our Staffing Managers expertly match clients with caregivers, work closely with your CCM, and handle scheduling and caregiver supervision to coordinate seamless care.'
  },
  {
    question: 'Professional Caregivers',
    answer: 'Our caregivers are trained to support a client’s unique passions, hobbies, and lifestyle, in addition to their personal care and activities of daily living.'
  }
]

const Dropdownfaq = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <div className='dropfaqdiv'>
      {data.map((item, i)=>(
        <div className="item">
          <div className={selected === i ? 'title df show' : 'title df'} onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default Dropdownfaq