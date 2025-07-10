import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/sections/Navbar';
import Home from './components/Home';
import Footer from './components/sections/Footer';

import { lazy, Suspense, useState } from 'react';
import { AddOrder } from './components/sections/Context';
import { Loading } from './components/sections/Loading';
const About = lazy(() => import('./components/About'));
const Project = lazy(() => import('./components/Project'));
const Contact = lazy(() => import('./components/Contact'));
const Testimonials = lazy(() => import('./components/Testimonial'));
const Register = lazy(() => import('./components/Register'));
import AOS from 'aos';
AOS.init();



const App = () => {
  const order = useState(0);
  return (
    <HashRouter>
      <AddOrder.Provider value={order}>
        <Suspense fallback={<Loading />} >
          <header className='fixed top-0 left-0 w-full shadow-lg z-50 bg-slate-900'>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Project />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </main>
          <footer className='bg-slate-900 rounded-t-2xl'>
            <Footer />
          </footer>
        </Suspense>
      </AddOrder.Provider>
    </HashRouter>
  )
}

export default App;