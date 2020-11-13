import { useEffect, useState } from "react";

function useFetch(url) {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: state.data, loading: true });
    fetch(url)
      .then((data) => data.json())
      .then((data) => setState({ data: data, loading: false }));
  }, [url]);

  return state;
}

export default useFetch;
