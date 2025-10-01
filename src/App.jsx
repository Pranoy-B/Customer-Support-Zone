import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CardSection from './components/CardSection/CardSection'
import { Suspense } from 'react'


const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const CardPromise = fetchData()

function App() {
 
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback="Loading Data....."><CardSection CardPromise={CardPromise}></CardSection></Suspense>
    </>
  )
}

export default App
