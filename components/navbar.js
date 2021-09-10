import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'

function navbar() {
  return (
    <nav>
      <Link href='/'>
        <a>Nate Valline</a>
      </Link>    
    </nav>
  )
}

export default navbar
