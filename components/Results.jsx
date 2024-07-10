import Card from './Card';

function Results({ results }) {
  return (
    <div className='mx-auto max-w-6xl p-4 sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5'>
      {results.map(result => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
