// importazione file
import { useState } from "react";


function App() {

  const[newPost, setNewPost] = useState({
    author:"",
    title:"",
    body:"",
    public: false
  })

  function addNewPost(event){
    const{name,type,value,checked}= event.target
    setNewPost(prev =>({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

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
                value={newPost.author}
                onChange={addNewPost}
                required
              />
            </div>
            <div className="input-container">
              <label>Titolo</label>
              <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={addNewPost}
                required
              />
            </div>
            <div className="input-container">
              <label>Testo</label>
              <textarea
                name="body"
                value={newPost.body}
                onChange={addNewPost}
                required
              />
            </div>
            <div className="input-container check">
              <input
                type="checkbox"
                name="public"
                checked ={newPost.public}
                onChange={addNewPost}
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
