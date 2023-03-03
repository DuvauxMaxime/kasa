import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Location } from './pages/Location'
import { Error } from './pages/Error'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/a-propos/' element={ <About />}/>
        <Route path='/location/' element={ <Location />}/>
        <Route path='/*' element={ <Error />}/>
      </Routes>
    </div>
  )
}