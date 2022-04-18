import React from 'react';

function Authors(props){
  
const {authors} = props
        return(
            <div className="book-authors">
                {
                    authors.map((author)=>(
                        <p key={author}>{author}</p>
                        ))
                }
            </div>
        );   
}

export default Authors;