import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-ejemplos/";

export const Layout = () => {
  //https://www.breakingbadapi.com/api/quotes/1
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  //si la data, tiene un valor, entonce toma la data en la posicion 0

  return (
    <>
      <h1>BreakingBad quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        onClick={decrement}
        disabled={counter === 1 || isLoading}
      >
        Previous quote
      </button>

      <button
        className="btn btn-primary"
        onClick={increment}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
