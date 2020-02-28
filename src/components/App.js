import React from 'react';
 
import Header from './Header'
import Footer from './Footer';
import Note from './Note';
import Notes from "../Notes";

// const allNotes = Notes.map((note)=>{
//     return < Note
//     key = {note.key} 
//     title = {note.title}
//     content = {note.content} />
// });

 const App=()=> {
    return (
        <div>
           <Header />
           {Notes.map((noteItem)=> {
               return <Note 
               key = {noteItem.key}
               title = {noteItem.title}
               content = {noteItem.content}
               />
           })}
           
           <Footer />
           
        </div>
    )
}


export default App;