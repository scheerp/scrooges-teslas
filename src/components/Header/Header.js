import logo from '../../assets/logo.jpg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to={`/`} className={styles.wrapper}>
      <img className={styles.logo} src={logo}></img>
    </Link>
  )
}

export default Header
