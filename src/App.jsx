import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './reducers/counter'
import { login, logout } from './reducers/isLogged'
import Button from './components/Button'


function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)

  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="counter">
        <h1>Counter: {counter}</h1>
        <div className="">
          <Button handleUserLog={() => dispatch(increment())}>
            Increment
          </Button>
          <Button handleUserLog={() => dispatch(decrement())}>
            Decrement
          </Button>
        </div>
      </div>

      <div className="login">
        {<h2>{logged ? "You are logged" : "Login please"}</h2>}
        <div className="">
          <Button handleUserLog={() => dispatch(login())}>
            Login
          </Button>
          <Button handleUserLog={() => dispatch(logout())}>
            Logout
          </Button>
        </div>
      </div>

    </div>
  )
}

export default App
