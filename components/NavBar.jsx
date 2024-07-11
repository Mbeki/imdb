import { Suspense } from 'react';
import NavBarItem from './NavBarItem';

function NavBar() {
  return (
    <div className='flex justify-center bg-amber-100 p-4 dark:bg-gray-600 lg:text-lg'>
      <Suspense fallback='Loading...'>
        <NavBarItem title='Trending' param='fetchTrending' />
        <NavBarItem title='Top rated' param='fetchTopRated' />
      </Suspense>
    </div>
  );
}

export default NavBar;
