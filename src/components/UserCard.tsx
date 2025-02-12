// import React from "react";
// import { Candidate } from "../interfaces/CandidateInterface";

type CandidateProps = {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  email: string;
  company: string;
  bio: string;
};

const UserCard = (props: CandidateProps) => {
  return (
    <div>
      <figure className="userCard">
        <img className="userImage" src={props.avatar_url} alt={props.name} />
        <figcaption>
          <h2 className="userCard__name">
            {props.name} <span>({props.login})</span>
          </h2>
          <div className="userCard__info">
            <p>Location: {props.location}</p>
            <p>Company: {props.company}</p>
            <p>Email: {props.email}</p>
            <p>Bio: {props.bio}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserCard;
