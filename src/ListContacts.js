import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
class ListContact extends Component{
   static prototypes={
        contacts:propTypes.array.isRequired,
        onDeleteContact:propTypes.func.isRequired
    }
    
    state={query:''}

    clearQuery=(()=>(
        this.UpdateQuery('')
    ))

    UpdateQuery=((query)=>{
        this.setState(()=>({
        query:query.trim()
        }))
    })

render(){



const {contacts,onDeleteContact}= this.props
const { query } = this.state
const showContacts = query === '' ?
 contacts:
  contacts.filter((c)=>(c.name.toLowerCase().includes(query.toLowerCase())
  
  ))
    return (
<div className='list-contacts'>
    
    <div className='list-contacts-top'>
        <input className='search-contacts'
            value={this.state.query} onChange={((event)=>{this.UpdateQuery(event.target.value)})} />
    <Link to='/create' 
   
    className='add-contact'>Add Contact</Link>
    </div>
    
    {
        showContacts.length!== contacts.length && (

            <div className='showing-contacts'>
                    <span>now showing {showContacts.length} of {contacts.length} contacts</span>
                    <button onClick={this.clearQuery}>Show all</button>
            </div>
        )

    }
    <ol className="Contact-list">
    {
    showContacts.map((contact)=>( 
    <li key={contact.name} className="contact-list-item">
    <div className='contact-avatar' 
    style={{backgroundImage:`url(${contact.avatarURL})`}}>

    </div>
    <div className='contact-details'>
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
    </div>

        <button
        onClick={()=>onDeleteContact(contact)}
        className='contact-remove'>remove</button>

    </li>


    ))

    }
    </ol>

</div>
    )
}



}



export default ListContact