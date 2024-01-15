import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/header';

const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>

          <Container>
            <h2> Welcome to ProShop</h2>
          </Container>

        </main>
    </>
  )
}


export default App;
