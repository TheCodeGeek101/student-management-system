import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaChartLine,
  FaClock,
  FaLifeRing,
  FaMoneyBill,
  FaUser,
} from 'react-icons/fa';
import Image from 'next/image';

// import fcb from "../../public/images/fcb.png";
import fcb from "../../public/images/fcb.jpg";
const Sidenav = ({ onSidebarClick }) => {
  const links = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      reactIcon: <FaChartLine />,
      colour: '#ff0000',
    },
    {
      name: 'Profile',
      link: '/profile',
      reactIcon: <FaUser />,
      colour: '#00ff00',
    },
    {
      name: 'Support',
      link: '/support',
      reactIcon: <FaLifeRing />,
      colour: '#0000ff',
    },
    {
      name: 'Payment',
      link: '/payment',
      reactIcon: <FaMoneyBill />,
      colour: '#ffff00',
    },
    {
      name: 'Session',
      link: '/session',
      reactIcon: <FaClock />,
      colour: '#ff00ff',
    },
  ];

  const router = useRouter();
//   const { logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleClick = (componentName) => {
    onSidebarClick(componentName);
  };

  const handleLogout = async () => {
    // setLoading(true);
    try {
    //   await logout();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.aside
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-y-0 flex flex-wrap items-center justify-between p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-gray-50 border-0 shadow-xl bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 md:w-60"
      aria-expanded="false"
      id="sidenav-main"
      sidenav-hidden
    >
      <div className="h-19 w-full text-center">
        <i
          className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
          sidenav-close
        ></i>
        <h1 className='font-bold text-2xl text-primary'>Parent's Portal</h1>
        <Link href="/" passHref>
          <div className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700">
            {/* <Image
              src="/assets/images/Logo.png"
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
              alt="main_logo"
              width={20}
              height={20}
            /> */}
            <Image
              src={fcb}
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
              alt="main_logo"
              width={100}
              height={100}
            />
            
          </div>
        </Link>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <div className="flex flex-col items-center justify-center w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          {links.map((link, i) => (
            <li className="mt-0.5 w-full" key={i}>
              <Link
                href={link.link}
                passHref
              >
                <div
                  className="py-2.7 bg-blue-500/13 text-dark opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                  onClick={() => handleClick(link.name)}
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    {link.reactIcon}
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    {link.name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-4">
        <div className="h-full"></div>
        <Link
          href="/payment"
          passHref
          className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-primary bg-150 hover:shadow-xs hover:-translate-y-px"
        >
          Make Payment
        </Link>
        <Link
          href="#"
          className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-primary border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px"
          onClick={handleLogout}
        >
          {loading ? 'Come back soon...' : 'Logout'}
        </Link>
      </div>
    </motion.aside>
  );
};

export default Sidenav;
