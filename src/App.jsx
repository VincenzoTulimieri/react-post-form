// importazione file
import { useState } from "react";


function App() {





  return (
    <>
      <header>
        <h1 className="title-page">Inserisci il tuo post</h1>
      </header>
      <main>
        <div className="container">
          <form>
            <div className="input-container">
              <label>Autore</label>
              <input
                type="text"
                name="author"
                required
              />
            </div>
            <div className="input-container">
              <label>Titolo</label>
              <input
                type="text"
                name="title"
                required
              />
            </div>
            <div className="input-container">
              <label>Testo</label>
              <textarea
                name="body"
                required
              />
            </div>
            <div className="input-container check">
              <input
                type="checkbox"
                name="public"
              />
              <label>Rendi pubblico</label>
            </div>
            <button className="btn" type="submit">Invia il tuo post</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
