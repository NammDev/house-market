import { Navigate } from 'react-router-dom'
import routes from '../config/routes'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from '../components/Spinner'

function PrivateRoute({ children }) {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? children : <Navigate to={routes.signIn} />
}

export default PrivateRoute
