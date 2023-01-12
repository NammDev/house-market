import routes from '../config/routes'
import { Explore, ForgotPassword, Offers, Profile, SignIn, SignUp, NotFound } from '../pages'
import { FragmentLayout, FooterLayout } from '../layouts'

// Don't Need Login
const privateRoutes = [{ path: routes.profile, page: Profile, layout: FragmentLayout }]

export default privateRoutes
