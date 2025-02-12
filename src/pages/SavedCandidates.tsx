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
                    src={candidate.avatar_url}
                    alt={candidate.name}
                    width="50"
                    height="50"
                  />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.login}</td>
                <td>{candidate.location}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company}</td>
                <td>{candidate.bio}</td>
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
