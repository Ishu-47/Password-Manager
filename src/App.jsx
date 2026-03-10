import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-green-50">
        <Navbar />

        <main className="flex-grow">
          <Manager />
        </main>

        <Footer />
      </div>

    </>
  )
}

export default App
