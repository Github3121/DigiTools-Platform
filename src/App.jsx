import { Suspense, useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Rating from './Components/Rating/Rating';
import Troggle from './Components/Troggling/Troggle';
import Products from './Components/Products/Products';
import ShortSummry from './Components/ShortSummry/ShortSummry';
import Pricing from './Components/Pricing/Pricing';
import Workflow from './Components/Workflow/Workflow';
import TheEnd from './Components/TheEndFooter/TheEnd';
import AddedCarts from './Components/AddedCarts/AddedCarts';
import { RotatingLines } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';

function App() {

  const productsData = async () => {
    const res = await fetch('ProductsData.json');
    return res.json();
  }
  const productsPromise = productsData();

  const pricingData = async () => {
    const res = await fetch('PricingData.json');
    return res.json();
  }
  const pricingPromise = pricingData();

  const [toggle, setTroggle] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  console.log(cartItems);

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const notify = (getstatus) => toast(`${getstatus}`);


  return (
    <>
      <header className="App-header">
        <Navbar cartItems={cartItems} />
        <Hero />
      </header>
      <main>
        <Rating />
        <div className='flex flex-col items-center justify-center gap-10'>
          <Troggle toggle={toggle} setToggle={setTroggle} cartItems={cartItems} />
          <Suspense fallback={<RotatingLines
            visible={true}
            height="40"
            width="40"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />}>
            {toggle ? <Products productsPromise={productsPromise} addToCart={addToCart} cartItems={cartItems} notify={notify} /> : <AddedCarts cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} notify={notify} />}
          </Suspense>
        </div>
        <ShortSummry />
        <Pricing pricingPromise={pricingPromise} />
        <Workflow />
      </main >
      <footer className='bg-[#0F172A] text-white text-center py-4'>
        <TheEnd />
        <p className='pt-4 mx-4 border-t-[1px] border-[#fafafa6b]'>© 2023 Your Company. All rights reserved.</p>
      </footer>
      <ToastContainer />
    </>
  )
}

export default App
