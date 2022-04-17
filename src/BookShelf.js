import React,{Component} from 'react';
import Authors from './Authors';
class Bookshelf extends Component{

    render(){
const{books,shelfName,UpdateBookShelf} = this.props
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {
                       books.map((book,i)=>(
                      <li key={shelfName + i}>
                        <div className="book">
                          <div className="book-top">
                             { book.imageLinks!==undefined && book.imageLinks.thumbnail!==undefined ?
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            :<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://thumbs.dreamstime.com/z/open-book-16121250.jpg)` }}></div>
                            }
                            <div className="book-shelf-changer">
                              <select value={shelfName} onChange={((e)=>UpdateBookShelf(book,e.target.value,))}>
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
                      
                      }
                    </ol>
                  </div>
                </div>
        );
    }
}
export default Bookshelf;