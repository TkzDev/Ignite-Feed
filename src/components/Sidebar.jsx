import { ProfileAvatar } from './ProfileAvatar'
import styles from './Sidebar.module.css'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.profileCover}
        src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />

      <div className={styles.profile}>
        {/* <ProfileAvatar /> */}
        <strong>Tkz Dev</strong>
        <span>Full-Stack Developer</span>
      </div>

      <footer>
        <a 
          href="https://discord.com/"
        >
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}