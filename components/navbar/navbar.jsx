import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className={`bg-gray-800 border-gray-200 p-3 m-0 flex items-center flex-wrap`}>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4'>
                        <span className={`text-xl text-white font-bold uppercase tracking-wide`}>
                            Thinking Forwards
                        </span>
                    </a>
                </Link>

                <button className={'mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 inline-flex lg:hidden ml-auto'}
                    onClick={handleClick}
                >
  	                <svg
                        className={'w-6 h-6 text-white'}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>

                <div
                    className={`w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className={` ${ active ? '' : 'hidden'} lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto`}>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                Home
                            </a>
                        </Link>
                        <Link href='/skills'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                Skills
                            </a>
                        </Link>
                        <Link href='/learnmore'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                Learn more
                            </a>
                        </Link>
                        <Link href='/contact'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                Contact us
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
