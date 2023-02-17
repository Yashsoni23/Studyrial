import React from 'react'
import Loading from './Loading.js'
import Navbar from './Navbar.js'

const Home = () => {
  const load = false;
  return (
    <>
      {/* Section -1 */}
      <section className="flex relative flex-col justify-center items-center w-screen h-screen bg-cyan-50">
        <div className="flex w-1/2 h-full radius bg-red-200"></div>
        <Navbar />
      <div className="flex">
        <img src="6461.jpg" alt="" />
      </div>
        {
          load ? <Loading /> : ""
        }
      </section>
      {/* Section -2 */}
      <section className="flex w-screen h-screen bg-white">
          
      </section>
    </>
  )
}

export default Home