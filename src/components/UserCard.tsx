import React from "react";
import { Candidate } from "../interfaces/CandidateInterface";
const UserCard = ({ avatar_url, name, login, location, company, bio }) => {
  return (
    <div>
      <figure className="userCard">
        UserCard
        <img src={avatar_url} alt={name} />
        <figcaption>
          <h2>{name}</h2>
          <p>{login}</p>
          <p>{location}</p>
          <p>{company}</p>
          <p>{bio}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserCard;
