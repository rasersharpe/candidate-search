import { useState, useEffect } from "react";
import type { Candidate } from "../interfaces/CandidateInterface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const getStorageUsers = () => {
      const storageUsers = localStorage.getItem("users");
      if (storageUsers) {
        return JSON.parse(storageUsers) as Candidate[];
      }
      return [];
    };

    setSavedCandidates(getStorageUsers());
  }, []);

  const handleReject = (id: number) => {
    // Filter out the rejected candidate
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.id !== id
    );

    // Update state
    setSavedCandidates(updatedCandidates);

    // Update localStorage
    localStorage.setItem("users", JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>
                  <img
                    className="tableAvatar"
                    src={candidate.avatar_url ? candidate.avatar_url : "N/A"}
                    alt={candidate.login}
                    width="50"
                    height="50"
                  />
                </td>
                <td>{candidate.name ? candidate.name : "N/A"}</td>
                <td>{candidate.login ? candidate.login : "N/A"}</td>
                <td>{candidate.location ? candidate.location : "N/A"}</td>
                <td>
                  {candidate.email ? (
                    <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>{candidate.company ? candidate.company : "N/A"}</td>
                <td>{candidate.bio ? candidate.bio : "N/A"}</td>
                <td>
                  <button
                    className="actionButton"
                    onClick={() => handleReject(candidate.id)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </>
  );
};

export default SavedCandidates;
