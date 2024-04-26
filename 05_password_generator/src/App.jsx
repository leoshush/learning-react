import { useState, useCallback ,useEffect,useRef} from "react";
function App() {
  const [length, setlength] = useState(7);
  const [numallow, setnumallow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setpassword] = useState("");
  
  //useref hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*[]{}-_+=~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numallow, charAllow, setpassword]);
  const copyPasswordOnClipBoard = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{passwordGenerator()},[length,numallow,charAllow,passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-4 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden  mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copyPasswordOnClipBoard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={() => {
                setnumallow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setcharAllow((prev)=>!prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
