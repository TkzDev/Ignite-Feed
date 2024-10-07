import styles from './Header.module.css'
import LogoIgnite from '../assets/logo-ignite.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoIgnite} alt="Logotipo do Ignite" />
    </header>
  )
}