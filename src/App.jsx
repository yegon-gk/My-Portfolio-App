import React from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
