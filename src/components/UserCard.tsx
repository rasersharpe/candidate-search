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
        <img
          className="userImage"
          src={props.avatar_url ? props.avatar_url : "N/A"}
          alt={props.login}
        />
        <figcaption>
          <h2 className="userCard__name">
            {props.name ? props.name : "N/A"}{" "}
            <span>({props.login ? props.login : "N/A"})</span>
          </h2>
          <div className="userCard__info">
            <p>Location: {props.location ? props.location : "N/A"}</p>
            <p>Company: {props.company ? props.company : "N/A"}</p>
            <p>
              Email:{" "}
              {props.email ? (
                <a href={`mailto:${props.email}`} className="email-link">
                  {props.email}
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>Bio: {props.bio ? props.bio : "N/A"}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserCard;
