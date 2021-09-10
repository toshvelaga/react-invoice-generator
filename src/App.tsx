import React from 'react'
import InvoicePage from './components/InvoicePage'
import './scss/_app.css'
import './scss/_color.css'
import './scss/_icons.css'
import './scss/_layout.css'
import './scss/_spacing.css'
import './scss/_text.css'
import './scss/_typography.css'

function App() {
  return (
    <div className='app'>
      <h1 className='center fs-30'>React Invoice Generator</h1>
      <InvoicePage />
    </div>
  )
}

export default App
