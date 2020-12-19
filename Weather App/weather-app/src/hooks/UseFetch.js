import { useEffect, useState } from "react";

export const UseFetch = (url) => {
  const [state, setState] = useState({ data: null, fetching: true });

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) =>
        setState({
          data: data,
          fetching: false,
        })
      );
  }, [url]);
  console.log(state);
  return state;
};
