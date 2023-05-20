import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1683298925108-7712a3155ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/43359988?v=4" />
                <strong>Rafael Dias</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}