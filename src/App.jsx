import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CardSection from './components/CardSection/CardSection'
import { Suspense } from 'react'
import { useState } from 'react'


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
    </>
  )
}

export default App
