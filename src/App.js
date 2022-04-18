import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import BooksList from './BooksList';
import BookSearch from './BookSearch';
import './App.css';
class App extends Component {
state ={
  books : []
}

// removeContact=(contact)=>{
// this.setState((currentState)=>({
//   contacts : currentState.contacts.filter(c=>c.id!==contact.id)
// }))
// ContactsApi.remove(contact)
// }
GetBooks(){
  BooksAPI.getAll().then((books)=>{
    this.setState(()=>({
      books:books
    }))
  })
}
  componentDidMount(){
this.GetBooks();
}
UpdateBookShelf=((book,shelf)=>{
BooksAPI.update(book,shelf).then(()=>{
  book.shelf=shelf
  this.setState((currentState)=>({
    books: currentState.books.filter(b => b.id !== book.id).concat([ book ])
  }))
  
})
})
// createContact=((contact)=>{
// ContactsApi.create(contact).then(()=>{

//   this.setState((currentState)=>({
//     contacts : currentState.contacts.concat([contact])
//     }))
// })
// })

  render() {
    return (
      <div className='app'>
         <Route exact path='/' render={()=>(
      <BooksList books={this.state.books} UpdateBookShelf={this.UpdateBookShelf} />
  
    )} ></Route>
     <Route path='/search' render={()=>(
       <BookSearch UpdateBookShelf={this.UpdateBookShelf} userBooks={this.state.books}/>
     )} ></Route>    
     
      </div>
    );
  }
}

export default App;
