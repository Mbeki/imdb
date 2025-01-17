import MenuItem from './MenuItem';
import { MdHome } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  return (
    <header className='mx-2 flex max-w-6xl items-center justify-between py-6 sm:mx-auto'>
      <div className='flex'>
        <MenuItem title='HOME' address='/' Icon={MdHome} />
        <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='mr-1 rounded-lg bg-amber-500 px-2 py-1 font-bold'>
              IMDb
            </span>
            <span className='hidden text-xl sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
