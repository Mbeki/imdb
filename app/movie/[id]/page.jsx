import Image from 'next/image';

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
  );
  // const data = await res.json();
  // console.log(data);
  return await res.json();
}
async function MoviePage({ params }) {
  const movieId = params.id;
  // console.log(movieId);
  const movie = await getMovie(movieId);

  return (
    <div>
      <h1 className='w-full'>
        <div className='mx- md: mx-auto flex max-w-6xl flex-col content-center items-center p-4 md:flex-row md:space-x-6 md:pt-8'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            alt='movie cover'
            className='rounded-lg'
            style={{
              maxWidth: '100%',
              height: '100%',
            }}
            placeholder='blur'
            blurDataURL='/spinner.svg'
          />
          <div className='p-2'>
            <h2 className='mb-3 text-lg font-bold'>
              {movie.title || movie.name}
            </h2>
            <p className='mb-3 text-lg'>
              <span className='mr-1 font-semibold'>Overview:</span>
              {movie.overview}
            </p>
            <p className='mb-3'>
              <span className='mr-1 font-semibold'>Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className='mb-3'>
              <span className='mr-1 font-semibold'>Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default MoviePage;
