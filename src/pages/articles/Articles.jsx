import React from 'react'
import './articles.scss'
import {motion} from 'framer-motion'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom'
import header from '../../img/articles.png'
import oldman from '../../img/oldman.png'
import article1 from '../../img/article1.png'
import article2 from '../../img/article2.png'
import article3 from '../../img/article3.png'
import Article from '../../components/article/Article'

const latest = [
        {
            img: article1,
            title: 'Unlocking the power of home healthcare',
            words: 'There are many unique health considerations for aging females, and ways their loved ones can help. Read on to get tips on what you can do.',
            link: ''
        },
        {
            img: article2,
            title: 'How To Engage in Exercise Even if You Have Limited Mobility',
            words: 'Even if you have limited mobility, there are ways you can keep your body moving to avoid muscle atrophy and ways you can keep your mind engaged for your mental health. Here are some ideas to try.',
            link: ''
        },
        {
            img: article3,
            title: 'The future of compassionate care',
            words: 'There are four main symptoms of Parkinson’s disease, and it is important to seek treatment if you have more than one of them. However, there are some lesser-known indicators as well.',
            link: ''
        },
    ]

const Articles = () => {
  return (
    <div>
      <Navbar/>
      <header className='articlesheader'  id='featured'>
        <div className="left">
          <h1>Find the Best Article regarding your Loved One</h1>
          <div className="line"></div>
          <p>"I love to share knowledge and am currently writing a book on how to start a digital business and create a very powerful team."</p>
        </div>
        <div className="right">
          <img src={header} alt="" />
        </div>
      </header>
      <section className="popular">
        <h1>Popular Articles</h1>
        <div className="latest">
            { latest.map((fill, i)=>(
                <Article img={fill.img} title={fill.title} words={fill.words} />
            ))}
        </div>
        <div className="featured" >
            <div className="left">
                <motion.div initial={{ x: '-50%'}} whileInView={{ x: '0'}} transition={{duration: .5, type: 'spring'}}> <span>Featured Article</span> </motion.div>
                <div><img src={oldman} alt="" /></div>
            </div>
            <div className="right">
                <h2>Caring for a Loved One With Aphasia</h2>
                <h4>Aphasia is a language disorder that affects the ability to comprehend and express speech, both verbally and written. As aphasia is a chronic disorder, it is essential that caregivers learn how to effectively communicate with their loved ones. That's where we come in. Our expert team of professionals is trained in aphasia and can provide a range of services to help your loved one live their best life. From speech and language therapy to assisted living and in-home care, we are dedicated to providing the highest level of quality care. Our goal is to support people with aphasia and their caregivers in navigating the challenges of each day. With the right care and support, we can make a significant difference in the quality of life of your loved one with aphasia.</h4>
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Articles