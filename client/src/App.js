import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useMemo} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { UserContext } from './Context/UserContext';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import LogIn from './Components/LogIn';
import TakeOrder from './Components/TakeOrder/TakeOrder';
import LogOutPopup from './Components/LogOutPopup';
import Orders from './Components/Orders/Orders';

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [popupIsOpen, setPopupIsOpen] = useState(false)

  function handlePopupChange() {
    setPopupIsOpen(!popupIsOpen)
  }

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


  function handleLogOut() {
    fetch("/logout", {method: "DELETE"})
    setCurrentUser()
    setLoggedIn(false)
    setPopupIsOpen(false)
  }


  return (
    <BrowserRouter>

      <div className="App">
        <UserContext.Provider
        value={providerValue}
        >
          <Navbar handlePopupChange={handlePopupChange} setLoggedIn={setLoggedIn} currentUser={currentUser} />
          <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<LogIn />}/>
            <Route path="/take-order" element={<TakeOrder />}/>
            <Route path="/orders" element={<Orders currentUser={currentUser} />}/>
          </Routes>
        </UserContext.Provider>
        { popupIsOpen ? <LogOutPopup handleLogOut={handleLogOut} handlePopupChange={handlePopupChange} /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
