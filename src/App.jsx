import { useState } from 'react'
import './App.css'

function App() {
  const [zoomed, setZoomed] = useState(false)

  return (
    <main
      className={`hero ${zoomed ? 'is-zoomed' : ''}`}
      onClick={() => {
        if (zoomed) {
          setZoomed(false)
        }
      }}
    >
      <div className="background"></div>
      <div className="dark-layer"></div>

      {!zoomed && (
        <h1
          className="title"
          onClick={(e) => {
            e.stopPropagation()
            setZoomed(true)
          }}
        >
          Mount Explore
        </h1>
      )}

      {zoomed && (
        <section className="scene">
          <p className="scene-label">Click anywhere to return</p>
          <h2>Into the mountains</h2>
        </section>
      )}
    </main>
  )
}

export default App