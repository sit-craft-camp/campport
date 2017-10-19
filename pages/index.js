import React from 'react'
import Head from 'next/head'

// import Component from '../components/'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'

export const Index = () => (
  <div> 
    <Head>
      <link rel="stylesheet" href="/static/style.css"/>
    </Head> 
    <Navbar />
    <Gallery />
  </div>
)

export default Index
