import { Suspense, useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Rating from './Components/Rating/Rating';
import Troggle from './Components/Troggling/Troggle';
import Products from './Components/Products/Products';
import { Audio } from 'react-loader-spinner';
import ShortSummry from './Components/ShortSummry/ShortSummry';

function App() {

  const productsData = async () => {
    const res = await fetch('ProductsData.json');
    return res.json();
  }
  const productsPromise = productsData();
  const [toggle, setTroggle] = useState(true);

  return (
    <>
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Rating />
        <div className='flex flex-col items-center justify-center gap-10'>
          <Troggle toggle={toggle} setToggle={setTroggle} />
          <Suspense fallback={<div>Loading...</div>}>
            {toggle ? <Products productsPromise={productsPromise} /> : <div>Cart</div>}
          </Suspense>
        </div>
        <ShortSummry />
      </main >
    </>
  )
}

export default App
