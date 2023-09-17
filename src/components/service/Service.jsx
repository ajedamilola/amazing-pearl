import React from 'react'
import './service.scss'

const home = [
    'Companionship',
    'Help At Home',
    'Respite Care',
    '24/7 Care',
    'Live-In Care'
]

const memory = [
    'Mild Cognitive Impairment (MCI)',
    'Alzheimer’s Disease',
    'Vascular Dementia',
    'Lewy Body Dementia',
    'Frontotemporal Dementia',
    'Parkinson’s Disease Dementia'
]

const specialized = [
    'Parkinson’s Disease',
    'Heart Health',
    'After A Stroke',
    'Cancer',
    'End-Of-Life Care',
    'Hospital To Home'
]

const Service = ({title, words, name}) => {
  return (
    <div className='servicediv'>
        <h2>{title}</h2>
        <p>{words}</p>
        <ul>
        {name === 'home' ?

            home.map((item, i)=>(
                <li>{item}</li>
            ))
            : name === 'memory' ?
            memory.map((item, i)=>(
                <li>{item}</li>
            ))
            :
            specialized.map((item, i)=>(
                <li>{item}</li>
            ))
        }
        </ul>
        <p className={name==='memory'? "appear show":'appear'}>* Personal care and non-medical support for people living with cognitive impairment</p>
    </div>
  )
}

export default Service