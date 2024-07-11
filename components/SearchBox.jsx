'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto flex max-w-6xl items-center justify-between px-5'
    >
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type='text'
        name=''
        placeholder='Search keywords...'
        className='h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none'
      />
      <button
        disabled={!search}
        type='submit'
        className='text-amber-600 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
