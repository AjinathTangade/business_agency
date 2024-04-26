import About from '@/components/Home/About';
import Banner from '@/components/Home/Banner';
import Counter from '@/components/Home/Counter';
import React from 'react';

function Home() {
  return (
    <div>
      <Banner />
      <About/>
      <Counter/>
    </div>
  )
}

export default Home;