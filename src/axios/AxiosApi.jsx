import { useEffect, useState } from "react";
import axios from "axios"


const AxiosApi = () => {
  const [countrie, setCountrie] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then(function(res) {
      //   console.log(res)
      setCountrie([...res.data]);
      console.log(res)
    });
  }, []);
 
  return (
    <div>
      <h1>All Countries</h1>
      <ul>
        {countrie.map((p) => {
          return <li><a href="">{p.name.common}</a></li>;
        })}
      </ul>
    </div>
  );
};
export default AxiosApi;
