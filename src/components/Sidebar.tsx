import styles from './sidebar.module.css';
import { Avatar } from './Avatar';
import { PiPencilLineDuotone } from 'react-icons/pi';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="./images/profile-pic4.jpeg" />
        <strong>James Doe</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PiPencilLineDuotone size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
