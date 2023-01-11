import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../../assets/svg/personOutlineIcon.svg'
import { Link } from 'react-router-dom'
import routes from '../../config/routes'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true
  }

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <Link to={routes.explore} className='navbarListItem'>
            <ExploreIcon
              fill={pathMatchRoute(routes.explore) ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute(routes.explore) ? 'navbarListItemNameActive' : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </Link>
          <Link to={routes.offers} className='navbarListItem'>
            <OfferIcon
              fill={pathMatchRoute(routes.offers) ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute(routes.offers) ? 'navbarListItemNameActive' : 'navbarListItemName'
              }
            >
              Offer
            </p>
          </Link>
          <Link to={routes.profile} className='navbarListItem'>
            <PersonOutlineIcon fill='#8f8f8f' width='36px' height='36px' />
            <p className='navbarListItemName'>Profile</p>
          </Link>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
