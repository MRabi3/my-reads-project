import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './BookShelf';


class BooksList extends Component{

    render(){
      const shelfs=['currentlyReading','wantToRead','read']
const {books,UpdateBookShelf} = this.props
console.log(books)
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
shelfs.map((shelf)=>(
  <Bookshelf key={shelf} UpdateBookShelf={UpdateBookShelf} shelfName={shelf} books={books.filter((book)=>book.shelf===shelf)} />
))
                }
               
              </div>
            </div>
            
              <Link className="open-search open-search-link" to='/search'>Add a book</Link>
            
          </div>
        




            //End
        )
    }
}
export default BooksList;