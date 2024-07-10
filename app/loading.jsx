import Image from 'next/image';

function loading() {
  return (
    <div className='flex justify-center'>
      <Image height={384} width={384} src='/spinner.svg' alt='loading...' />
    </div>
  );
}

export default loading;
