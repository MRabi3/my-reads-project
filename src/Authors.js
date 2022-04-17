import React,{Component} from 'react';

class Authors extends Component{

    render(){
const {authors} = this.props
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
}

export default Authors;