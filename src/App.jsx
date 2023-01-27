import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './reducers/counter'
import { login, logout } from './reducers/isLogged'
import Button from './components/Button'


function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="counter">
        <h1>Counter: {counter}</h1>
        <div className="">
          <Button handleClick={() => dispatch(increment())}>
            Increment
          </Button>
          <Button handleClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </div>
      </div>

      <div className="login">
        {<h2>{logged ? "You are logged" : "Login please"}</h2>}
        <div className="">
          <Button handleClick={() => dispatch(login())}>
            Login
          </Button>
          <Button handleClick={() => dispatch(logout())}>
            Logout
          </Button>
        </div>
      </div>

      <div className="users">
        <Button></Button>
        {users.data.lenght !== 0 &&
        users.data.map(item =>(
          console.log(item)
        ))}
      </div>
    </div>
  )
}

export default App
