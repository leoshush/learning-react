import { useEffect,useState } from "react";

function useCurrencyInfo(currency)
{  const [data,setData] = useState({})
    useEffect(()=>{
      fetch(`https://v6.exchangerate-api.com/v6/18c7049d632b43393fca5cf3/latest/USD`).then((res)=>
      res.json()).then((res) => setData(res[currency]))
},[currency])
 console.log(data)   
 return data
}

export default useCurrencyInfo;