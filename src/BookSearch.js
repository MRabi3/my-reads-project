import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Authors from './Authors';
import * as BooksAPI from './BooksAPI'
class BookSearch extends Component{
state={
  query:'',
  booksResults:[]
}
clearQuery=(()=>(
  this.UpdateQuery('')
))

UpdateQuery=((query)=>{
  this.setState(()=>({
  query:query
  }))
  this.SearchforBook(query.trim());
})


SearchforBook(query){
  
  BooksAPI.search(query).then((books)=>{
    if(books.error===undefined)
    {
      this.props.userBooks.forEach(book => {
        books.filter((b)=>b.id===book.id).map((b)=>b.shelf=book.shelf)
      })
    this.setState(()=>({
      booksResults:books
  }))
}
else
{
  this.setState(()=>({
    booksResults:[]
}))
}
}).catch(()=>{
  this.setState(()=>({
    booksResults:[]
  }))
}) 
}

OnUpdateBookShelf(book,shelf){
  this.state.booksResults.filter((b)=>b.id===book.id).map((b)=>b.shelf=book.shelf)
  this.setState((currentState)=>({
    booksResults:currentState.booksResults
}))
  this.props.UpdateBookShelf(book,shelf)
}
    render(){
      const { booksResults } = this.state
   

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">               
                <input type="text"
                value={this.state.query} onChange={((event)=>{this.UpdateQuery(event.target.value)})}
                placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
              booksResults.length>0 ?  booksResults.map((book,i)=>(
                        <li key={i}>
                          <div className="book">
                            <div className="book-top">
                             { book.imageLinks!==undefined && book.imageLinks.thumbnail!==undefined ?
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            :<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('https://thumbs.dreamstime.com/z/open-book-16121250.jpg')` }}></div>
                            }
                              <div className="book-shelf-changer">
                                
                                <select value={book.shelf!==undefined?book.shelf :"none" } onChange={((e)=>this.OnUpdateBookShelf(book,e.target.value))}>
                                  <option value="move" disabled>   Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {
                              book.authors!==undefined?
                            <Authors authors={book.authors}/>
                              : 
                              <div className="book-authors">No authors found</div>
                            }
                          </div>
                        </li>
  
                         ))
                        : <div>No result found</div>
                    }
              </ol>
            </div>
          </div>
        )
    }
}
export default BookSearch;