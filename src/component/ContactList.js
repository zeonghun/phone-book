import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);

  return (
    <div className="contact-list">
      <SearchBox />
      <b>{filteredList.length}</b>개의 연락처
      {filteredList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
