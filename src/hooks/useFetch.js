import React, { useEffect, useState } from "react";

const useFetch = (urlbase = "") => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(urlbase);

  useEffect(() => {
    fetch(url)
      .then((dataApi) => dataApi.json())
      .then((dataApi) => {
        setData(dataApi);
      });
  }, [url]);

  return { data, setUrl };
};

export default useFetch;
