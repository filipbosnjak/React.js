import React, { useMemo, useState } from "react";
import useFetch from "./useFetch";

const longestW = (data) => {
  console.log("computing..."); //WIth useMemo we get computing... only once
  if (!data) {
    return "";
  } else {
    let longest = "";
    data.forEach((sentence) => {
      sentence.split(" ").forEach((word) => {
        if (word.length > longest.length) {
          longest = word;
        }
      });
    });
    return longest;
  }
};

const UseMemo = () => {
  const [count, setCount] = useState(1);

  const state = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json"
  );

  //Function that returns longest word in the state.data JSON object

  //Here we call a longestW function and it keeps getting called everytime component rerenders
  //That means that the longest word is being recomputed each render. That (heavy) computation is useless cause the data from an API is not changing
  //There is our motivation to use useMemo

  //UseMemo returns a value - result of a heavy computing function , useCallback returns the whole function.

  const longest = useMemo(() => {
    return longestW(state.data);
  }, [state.data]);

  console.log(longest);
  console.log(longest);
  console.log(longest);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Inc
      </button>
      {state.loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(state.data, undefined, 2)}</pre>
      )}
    </div>
  );
};

export default UseMemo;
