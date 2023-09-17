import React from 'react'
import './helpitems.scss'

const helpleft = [
    'Companionship',
    'Medication Reminders',
    'Grocery Shopping',
    'Meal Prep and Nutrition',
    'Transportation and Errands',
    'Cognitive Engagement'
]
const nurseleft = [
    'Medication Administration',
    'Pre- and Post-Operative Care',
    'Post-Acute Care'
]
const helpright = [
    'Personal Care and Hygiene',
    'Staying Active',
    'Light Housekeeping',
    'Social Activities and Connection',
    'Hobbies and Passions',
    'Meaningful Activities'
]
const nurseright = [
    'Comfort Care',
    'Case Management',
    'End-of-Life Care'
]

const Helpitems = ({name}) => {
  return (
    <div className='helpitems'>
        <ul>
        {name === 'help' ?

            helpleft.map((item, i)=>(
                <li>{item}</li>
            ))
            :
            nurseleft.map((item, i)=>(
                <li>{item}</li>
            ))
        }
        </ul>
        <ul>
        {name === 'help' ?

            helpright.map((item, i)=>(
                <li>{item}</li>
            ))
            :
            nurseright.map((item, i)=>(
                <li>{item}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Helpitems