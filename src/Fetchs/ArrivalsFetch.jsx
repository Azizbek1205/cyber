import React, { useEffect, useState } from "react";

function ArrivalsFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return { data };
}

export default ArrivalsFetch;
