import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/43359988?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Rafael Dias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 11:13" dateTime='2022-05-11'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>
                Aliquam erat volutpat. Donec et lorem mattis, scelerisque ligula a, aliquam dolor. Nulla ultrices justo dictum massa aliquet, a mollis turpis aliquet. Sed fermentum sed erat vitae fringilla.
            </p>
            <p>👉🏻 <a href="#">Clique aqui para navegar</a></p>
            <p>
                <a href="#">#projeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>{' '}
            </p>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}