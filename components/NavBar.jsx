import NavBarItem from './NavBarItem';

function NavBar() {
  return (
    <div className='flex justify-center bg-amber-100 p-4 lg:text-lg dark:bg-gray-600'>
      <NavBarItem title='Trending' param='fetchTrending' />
      <NavBarItem title='Top rated' param='fetchTopRated' />
    </div>
  );
}

export default NavBar;
