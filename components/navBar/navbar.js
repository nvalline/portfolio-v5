import Link from 'next/link'
import Burger from './burger'
import navStyles from '../../styles/Nav.module.scss'

function navbar() {
  return (
    <nav className={navStyles.navContainer}>
      <div className={navStyles.logoContainer}>
        <Link href='/'>
          <a><img src='/images/nv_initials.png' alt='NV Logo' className={navStyles.logoImage} /></a>
        </Link>
      </div>
      <div className={navStyles.mobileNav}>
        <Burger />
      </div>
    </nav>
  )
}

export default navbar
