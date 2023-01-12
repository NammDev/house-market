import routes from '../config/routes'
import { Explore, ForgotPassword, Offers, Profile, SignIn, SignUp, NotFound } from '../pages'
import { FragmentLayout, FooterLayout } from '../layouts'

// Don't Need Login
const publicRoutes = [
  { path: routes.explore, page: Explore, layout: FooterLayout },
  { path: routes.offers, page: Offers, layout: FooterLayout },
  { path: routes.forgotPassword, page: ForgotPassword, layout: FragmentLayout },
  { path: routes.signIn, page: SignIn, layout: FragmentLayout },
  { path: routes.signUp, page: SignUp, layout: FragmentLayout },
  { path: routes.notFound, page: NotFound, layout: FooterLayout },
]

export default publicRoutes
