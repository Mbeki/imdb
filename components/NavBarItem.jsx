'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={`$ m-4 p-2 font-semibold hover:text-amber-600 ${
          genre &&
          genre === param &&
          'rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8'
        }`}
        href={`/?genre=${param}`}
      >
        {title}{' '}
      </Link>
    </div>
  );
}

export default NavBarItem;
