import styles from '../sidebar/Sidebar.module.css'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.profileCover}
        src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/TkzDev.png" alt="" />

        <strong>Tkz Dev</strong>
        <span>Full-Stack Developer</span>
      </div>

      <footer>
        <a 
          href="https://discord.com/"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M7.50001 16.875H3.75C3.58424 16.875 3.42527 16.8091 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V12.7578C3.12472 12.6766 3.14044 12.5962 3.17128 12.5212C3.20211 12.4461 3.24745 12.3778 3.30469 12.3203L12.6797 2.94531C12.7379 2.88625 12.8072 2.83936 12.8836 2.80735C12.9601 2.77534 13.0421 2.75885 13.125 2.75885C13.2079 2.75885 13.2899 2.77534 13.3664 2.80735C13.4428 2.83936 13.5122 2.88625 13.5703 2.94531L17.0547 6.42968C17.1138 6.48784 17.1606 6.55716 17.1927 6.63361C17.2247 6.71006 17.2412 6.79211 17.2412 6.87499C17.2412 6.95787 17.2247 7.03993 17.1927 7.11638C17.1606 7.19283 17.1138 7.26215 17.0547 7.3203L7.50001 16.875ZM7.50001 16.875H16.875M10.625 4.99999L15 9.37499"  
              stroke="#00B37E" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>

          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}