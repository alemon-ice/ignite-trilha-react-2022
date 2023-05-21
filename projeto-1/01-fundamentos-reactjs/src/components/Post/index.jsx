import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/43359988?v=4" />
                    <div>
                        <strong>Rafael Dias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 11:13" dateTime='2022-05-11'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p> aksdapsokdasdmoasm dpasomdaps daspomd aspkd sapodaspokdas podlkaspcczç m sf </p>
                
            </div>
        </article>
    )
}