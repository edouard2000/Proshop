import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>
          <Container>
            <h2> Latest products </h2>
           <Outlet />
          </Container>

        </main>
        <Footer />
    </>
  )
}
export default App;
