import React from "react";
import Avatar from './avatar'
import Detail from "./detal";
import Contacts from "./contact_list";

function Card(props) {  
  return (
    <>
      {Contacts.map((contact)=>(
        <div className="card">
          <div className="top">
            <h2 className="name">{contact.name}</h2>
            <Avatar img={contact.imgURL}/>
          </div>
          <div className="bottom">
            <Detail phone={contact.phone} emails={contact.email}/>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
