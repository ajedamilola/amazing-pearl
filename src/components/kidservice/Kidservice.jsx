import React, { useState } from 'react'
import './kidservice.scss'
import service1 from '../../img/service-1.png'
import service2 from '../../img/service-2.png'
import service4 from '../../img/service-4.png'
import service5 from '../../img/service-5.png'
import service6 from '../../img/service-6.png'


const data = [
    {
      id:'one',
      img: service1,
      question: 'HOME HEALTH AIDE SERVICES',
      answer: 'Our staff provide personal care services in the comfort and convenience of your home. These services are provided by trained and compassionate home health aides or personal care aides. These non-medical, in-home concierge services include providing assistance with activities of daily living (ADL’S) bathing, meal preparation, and mobility. Our personal care services will enable your child to receive customized care services, specific to their exact needs, in the comfort of your home.'
    },
    {
      id:'two',
      img: service2,
      question: 'INTRAVENOUS THERAPY',
      answer: 'Pediatric Intravenous Therapy involves skilled nursing care to assist families in administering intravenous products and medications. Therapies include but are not limited to antibiotics, anticoagulants, biologicals, blood clotting factor, catheter care, chemotherapy, enteral therapy, growth hormone, hydration, inotropic therapy, pain management, steroids, transplant therapies and total parenteral nutrition.'
    },
    {
      id:'four',
      img: service4,
      question: 'PERSONAL CARE AIDE',
      answer: 'Our staff provide personal care services in the comfort and convenience of your home. These services are provided by trained and compassionate home health aides or personal care aides. These non-medical, in-home concierge services include providing assistance with activities of daily living (ADLs) bathing, meal preparation, and mobility. Our personal care services will enable your child to receive customized care services, specific to their exact needs, in the comfort of your home.'
    },
    {
      id:'five',
      img: service5,
      question: 'PHYSICAL THERAPY',
      answer: "Physical therapy evaluates and addresses problems with motor skills. Children at different ages require varying movements and development to achieve the full mobility needed for walking, running, and climbing. Our pediatric physical therapists (PT) use a variety of treatment activities to help increase strength, endurance, and mobility for your child to be able to move within their environment. Physical therapists also evaluate for any adaptive equipment or orthotics your child may need to further his or her success. Whether using adaptation or working to strengthen and increase range of motion in body parts, a physical therapist can help a child achieve greater mobility and independence in their lives. Our PTs work with children and their families to assist each child in reaching their goals to function independently and to promote active participation in home, school, and community environments. We evaluate, create, and provide individualized treatment for children who have difficulty with motor skills. Your child might need physical therapy to help with developmental delay, a birth defect, chronic illness, or an injury. Physical therapy helps develop the strength and range of motion children need to move through their environment easily and effectively. Physical therapy goals often include developmental milestones like sitting, standing, crawling, and walking. Our licensed physical therapists also assess the need for orthotics (like splints and braces) and recommend adaptive equipment."
    },
    {
      id:'six',
      img: service6,
      question: 'SKILLED NURSING SERVICES',
      answer: 'At Amazing Pearl, our clinical team goes to great lengths to ensure a perfect match between each child and their clinician, with priority given to medical need and cultural compatibility. Depending on your child’s plan of care and your insurance coverage, we can provide one-on-one nursing — also called Private Duty Nursing or PDN — up to 24 hours a day, giving you peace of mind while you sleep, work, and do all the things you need to do.'
    },
  ]

const Kidservice = ({params}) => {
    const [selected, setSelected] = useState(null)
    

    const toggle = (i) =>{
      if (selected === i ){
        return setSelected(null)
      }
      if(params === i){
        return setSelected(i)
      }
      setSelected(i)
      console.log(i)
      console.log(params)
    }
    
    return ( 
      <div className='servicex'>
        {data.map((item, i)=>(
          <div className="faqitem">
            <div className={selected === i || params === i ? 'title df show' : 'title df'} onClick={() => toggle(i)} id={params} >
              <img src={item.img} alt="" />
              <h1>{item.question}</h1>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    )
}

export default Kidservice