import React from 'react'; 
import './assets/App.scss';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Separator from './components/Separator/Separator';
import About from './components/About/About';
import Banking from './components/Banking/Banking';
import OnlinePayments from './components/OnlinePayments/OnlinePayments';
import PricingPackage from './components/PricingPackage/PricingPackage';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Blogs from './components/Blogs/Blogs';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Separator />
      <About />
      <Banking />
      <OnlinePayments />
      <PricingPackage />
      <CustomerReviews />
      <Blogs />
      <FAQ />
    </>
  );
}

export default App;