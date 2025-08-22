import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwtToken1 = Cookies.get('jwt_token')
  if (jwtToken1 === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
