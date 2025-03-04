import { Link } from 'react-router-dom';
import footerLogo from '/logo.png'
import paymentMethods from '../../assets/payment-methods.png'
import { CiLocationOn } from 'react-icons/ci';
import { FaPhone, FaRegAddressCard } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { BsEnvelope } from 'react-icons/bs';
const Footer = () => {
  return (
    <>
      <footer className='py-10 border-t border-amber-400 bg-slate-50'>
        <div className='container mx-auto px-2 md:px-5 grid grid-cols-2 md:grid-cols-4 justify-center gap-8'>
          <div>
            <Link to='/'>
            <img className='logo w-[80px] md:w-[100px]' src={footerLogo} alt="Footer-logo" /></Link>
            <p className='text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <h2 className='font-medium text-xl md:text-2xl mb-1.5 md:mb-3'>My Accounts</h2>
            <ul>
              <li><Link to='/'>About Us</Link></li>
              <li><Link to='/'>Contact Us</Link></li>
              <li><Link to='/'>Terms & Conditions</Link></li>
              <li><Link to='/'>Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div>
            <h2 className='font-medium text-xl md:text-2xl mb-1.5 md:mb-3'>Quick Links</h2>
            <ul>
              <li><Link to='/'>Sotre Location</Link></li>
              <li><Link to='/'>My Account</Link></li>
              <li><Link to='/'>Orders Trackings</Link></li>
              <li><Link to='/'>Size Guide</Link></li>
              <li><Link to='/'>FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className='font-medium text-xl md:text-2xl mb-1.5 md:mb-3'>Contact Us</h2>
            <ul>
              <li><Link className='flex gap-1.5 items-center' to='/'><CiLocationOn /> Dhaka,Bangladesh</Link></li>
              <li><Link className='flex gap-1.5 items-center' to='/'><HiPhone /> +088 0346 9273</Link></li>
              <li><Link className='flex gap-1.5 items-center' to='/'><BsEnvelope  />ebazarsupport@gmail.com</Link></li>
              <li><Link className='flex gap-1.5 items-center' to='/'><FaRegAddressCard /> Road-2355 , Shakail Shen</Link></li> 
            </ul>
          </div>
        </div>
        <div className='container mx-auto px-2 md:px-5 mt-8 flex flex-col gap-2 md:flex-row justify-between'>
          <p>Powered by eBazar© 2025 | Jk-Mikaeel</p>
          <div><img className='max-w-[350px]' src={paymentMethods} alt="" /></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;