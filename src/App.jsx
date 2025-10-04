import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CardSection from './components/CardSection/CardSection'
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react'
import { useState } from 'react'
import Footer from './components/Footer/Footer'
 import '@fortawesome/fontawesome-free/css/all.min.css';


const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const CardPromise = fetchData()

 

function App() {
  
  const [inProgress, setInProgress] = useState(0)
  const [resolvedCount,setResolvedCount] = useState(0)
  const handleInProgress = (taskCard) => {
    setInProgress(taskCard.length)
  }
  const handleResolved = (resolved) => {
    setResolvedCount(resolved.length)
  }


  return (
    <>
      <Navbar></Navbar>

      <Banner inProgress={inProgress} resolvedCount={resolvedCount}></Banner>

      <Suspense fallback="Loading Data....."><CardSection ResolvedToParent = {handleResolved} TaskCardToParent={handleInProgress} CardPromise={CardPromise}></CardSection></Suspense>
    
      <Footer></Footer>
      <div className="footer sm:footer-horizontal bg-neutral flex justify-center items-center text-white p-10">
        <h4 className='text-center'>© 2025 CS — Ticket System. All rights reserved.</h4>
      </div>
    <ToastContainer/>
    </>
  )
}

export default App
