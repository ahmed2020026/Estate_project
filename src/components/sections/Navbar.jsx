import { linksNav } from '../../assets/assets'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { AddOrder } from './Context';

const NavBar = () => {
    const [open, setOpen] = useContext(AddOrder);
    /* close Menu */
    const Open = (e) => setOpen(e);
    /* scroll to top page */
    const TopPage = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <div className='container flex justify-between items-center'>
                <div className="logo">
                    <img src={assets.logo} alt="logo" />
                </div>
                {/* menu in large Screen */}
                <nav className='hidden md:block'>
                    {linksNav.map((link, index) => {
                        return <Link to={link.path} onClick={TopPage} key={index} className='link relative p-2 text-gray-300 duration-300 inline-block'>{link.name}</Link>
                    })}
                </nav>
                {/* menu in small Screen */}
                <nav className={`absolute duration-500 md:hidden w-full h-screen top-0 bg-white ${open ? 'left-0' : '-left-full' }`}>
                    <CloseIcon className='text-black absolute hero-image top-5 bg-gray-100 inline-block p-1 rounded-full cursor-pointer' style={{ fontSize: '35px' }} onClick={() => Open(false)} />
                    <br />
                    <br />
                    <br />
                    {linksNav.map((link, index) => {
                        return <Link to={link.path} onClick={() =>{ setOpen(false) ; TopPage()}} key={index} className='relative p-3 font-semibold text-gray-900 duration-300 block text-center'>{link.name}</Link>
                    })}
                </nav>
                <div className="btns flex items-center">
                    <div className='md:hidden'><MenuIcon className='text-white mr-4 cursor-pointer' onClick={() => Open(true)} /></div>
                    <Link to='/register' className='inline-block px-2 py-1 bg-white rounded'>Sign Up</Link>
                </div>
            </div>
        </>
    )
}
export default NavBar;