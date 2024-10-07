import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="TkzDev"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum at magni labore, deleniti dolorum perferendis harum, corporis eum minus, qui animi a accusamus nam? Id cum suscipit distinctio ducimus modi."
          />

          <Post
            author="Diego Fernandes"
            content="Hello World"
          />
        </main>
      </div>
    </div>
  )
}

export default App