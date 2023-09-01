import React, { useState } from 'react'
import './faq.scss'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import {Link} from 'react-router-dom'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const data = [
  {
    question: 'What’s the best home care?',
    answer: 'The best home care is provided by reliable, professional caregivers who are trained and backed by a home care agency that’s insured, providing oversight, care guidance, and back-up caregivers as needed.'
  },
  {
    question: 'How do I find the best caregiver for my loved one?',
    answer: 'The best caregiver is an experienced professional who has the training and skills to support your loved one’s care needs. It’s also important to find a caregiver who’s extremely reliable—has back-up if necessary—and is a good fit in terms of personality and shared interests.'
  },
  {
    question: 'Is home care better than moving to assisted living?',
    answer: 'Nine out of ten older adults would prefer to live independently in the home they know and love rather than moving to a facility or assisted living community. With the right level of support, most people can continue to live safely and comfortably at home even as they age with a progressive illness or medical condition.'
  },
  {
    question: 'How much does home care cost?',
    answer: 'Home care is typically billed by the hour, so the cost depends on the number of care hours per week and can vary slightly by region. Most families pay out-of-pocket for their care or use long-term care insurance.'
  },
  {
    question: 'How are you protecting your clients from COVID-19?',
    answer: 'We follow infection mitigation best practices and safety protocols, informed by the CDC and local authorities, and provide appropriate PPE to our caregivers. The majority of our caregivers and Care Teams are fully vaccinated against COVID-19.'
  },
  {
    question: 'How much is a home care agency better than hiring a private caregiver? Home care cost?',
    answer: 'If you value safety, security, and reliability, yes. A quality home care agency is insured and also manages the performance and scheduling of its caregivers, handles billing and payroll, and has back-up caregivers to fill in when needed. With a private hire caregiver, you’re responsible for setting up payroll and withholding taxes, caregiver vetting and background checks, and purchasing sufficient liability insurance to cover any accidents or injuries in the home.'
  }
]

const Faq = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <div className='faqdiv'>
      <h1>Frequently Asked Questions</h1>
      <div className="line"></div>
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

export default Faq