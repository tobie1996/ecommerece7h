import React from 'react'
import Hero from '../components/Hero'
import NewCollections from '../components/NewCollections'
import NewsLetter from '../components/NewsLetter'
import Popular from '../components/Popular'
import Offer from './Offer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offer />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Home
