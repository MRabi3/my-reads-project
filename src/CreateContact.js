import serialize from "form-serialize";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";

class CreateContact extends Component{

    handleSubmit=((e)=>{
        e.preventDefault()
        const values = serialize(e.target,{hash:true} )   
        console.log(values)
    if(this.props.onCreateContact)
        {
            this.props.onCreateContact(values)
        }
    })

    render(){
        
return(
    <div>
    <Link
    to='/' className="close-create-contact"

    >close</Link>
    <form onSubmit={this.handleSubmit} className="create-contact-form">
        <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64} />
        <div className="create-contact-details">
            <input  name="name" placeholder="Name" type='text'/>
            <input  name="handle" placeholder="Handle" type='text'/>
            <button>Add Contact</button>
        </div>
    </form>
    </div>
)

}

}

export default CreateContact;