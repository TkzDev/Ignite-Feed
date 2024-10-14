import { Comment } from '../comment/Comment'
import styles from '../post/Post.module.css'

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://github.com/TkzDev.png" />

					<div className={styles.authorInfo}>
						<strong>Tkz Dev</strong>
						<span>Full-Stack Developer</span>
					</div>

				</div>
				
				<time title='14 de outubro ás 04:45' dateTime='2024-14-10 04:40:25'>Públicado há 1h</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>

				<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

				<p>
					<a href="">jane.design/doctorcare</a>
				</p>

				<p>
					<a href="">#novoprojeto</a>{' '}
					<a href="">#nlw</a>{' '}
					<a href="">#rocketseat</a>
				</p>
			</div>
			
			<form className={styles.contentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea
					placeholder='Nossa, adorei amigo! Parabé|'
				/>

				<footer>				
					<button type='submit'>Publicar</button>
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