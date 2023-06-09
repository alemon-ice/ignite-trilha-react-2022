import { Header } from "./components/Header"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {/* TODO Posts */}
        <Post />
        <Post />
      </main>
    </div>
    </>
  )
}

export default App
