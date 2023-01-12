import { Navigate, Outlet } from 'react-router-dom'
import routes from '../config/routes'

function PrivateRoute({ chilren }) {
  const loggedIn = false

  return loggedIn ? chilren : <Navigate to={routes.signIn} />
}

export default PrivateRoute
