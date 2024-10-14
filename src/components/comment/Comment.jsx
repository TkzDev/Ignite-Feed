import { ThumbsUp, Trash2 } from 'lucide-react'
import styles from '../comment/Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/TkzDev.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContext}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tkz Dev</strong>

                            <time title='14 de outubro ás 04:45' dateTime='2024-14-10 04:40:25'>Cerda de 1h atrás</time>
                        </div>
                        
                        <button title='Deletar comentario'>
                            <Trash2 size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}