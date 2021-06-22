import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person, key) => (
        <article className="person" key={person.id}>
          <p> {person.name}</p>
          <p> {person.age} years</p>
          <img src={person.image} alt="pic" srcset="" />
        </article>
      ))}
    </>
  );
};

export default List;
