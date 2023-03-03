import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Location } from './pages/Location'
import { Error } from './pages/Error'
import { Banner } from './components/Banner'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
 
export const App = () => {
  return (
    <div>
      <header><Banner /><Navigation /></header>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/a-propos/' element={ <About />}/>
        <Route path='/location/' element={ <Location />}/>
        <Route path='/*' element={ <Error />}/>
      </Routes>
      <footer><Footer /></footer>
    </div>
  )
}