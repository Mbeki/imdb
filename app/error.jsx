'use client';
function Error({ error, reset }) {
  return (
    <div className='mt-10 text-center'>
      <h2>Something went wrong</h2>
      <button onClick={() => reset()} className='hover:text-amber-600ber'>
        Try again
      </button>
    </div>
  );
}

export default Error;
