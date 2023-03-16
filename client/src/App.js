import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useMemo} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { UserContext } from './Context/UserContext';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/current-user")
    .then((r) => {
      if(r.ok){
        r.json().then((data) => {
          setCurrentUser(data)
          setLoggedIn(true)
        })
      }else {
        r.text().then(error => {
            throw new Error(error)
        })
    }
    })
  },[])

  const providerValue = useMemo(() => ({
    loggedIn, setLoggedIn,
    currentUser, setCurrentUser
  }), [loggedIn, currentUser])


  return (
    <BrowserRouter>

      <div className="App">
        <UserContext.Provider
        value={providerValue}
        >
          <Navbar setLoggedIn={setLoggedIn} currentUser={currentUser} />
          <Routes>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
