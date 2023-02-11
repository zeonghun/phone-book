import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

const ContactList = () => {
  return (
    <div className="contact-list">
      <SearchBox />
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>

    </div>
  );
};

export default ContactList;
