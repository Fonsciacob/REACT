import { useState } from 'react';
import { useFetch, useCounter } from '../hooks';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  console.log({ data, isLoading, hasError });

  const { author, quote } = !!data && data[0];

  return (
    <div className="p-2">
      <h1 className="p-2">BreakeingBad Quotes</h1>
      <hr />
      {isLoading && <div>Loading...</div>}

      <blockquote className="py-2 text-right">
        <p className="text-xl italic font-semibold text-gray-900 ">{quote}</p>
        <div>
          <cite className="pr-3 font-medium text-gray-900">-{author}</cite>
        </div>
      </blockquote>
      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="bg-indigo-600 border-indigo-600 border px-1 py-1.5 rounded text-white"
      >
        Next quote
      </button>
    </div>
  );
};
