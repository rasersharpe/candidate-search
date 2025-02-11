import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import UserCard from "../components/UserCard";
import type Candidate from "../interfaces/CandidateInterface";

type User = {
  login: string;
};

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<User[]>([]);
  const [user, setUser] = useState<Candidate>({} as Candidate);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCandidates = await searchGithub();
      setCandidates(fetchedCandidates);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(candidates);
  }, [candidates]);

  useEffect(() => {
    if (candidates.length === 0) return;
    const fetchData = async () => {
      const fetchedCandidate = await searchGithubUser(candidates[index].login);
      if (!fetchedCandidate.login) {
        console.log("Skipping a user");
        setIndex(index + 1);
        return;
      }
      setUser(fetchedCandidate);
    };
    fetchData();
  }, [candidates, index]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleNextUser = () => {
    setIndex(index + 1);
  };

  const getStorageUsers = () => {
    const storageUsers = localStorage.getItem("users");
    if (storageUsers) {
      return JSON.parse(storageUsers);
    } else {
      return [];
    }
  };

  const handleNextUserAndSave = () => {
    const storedUsers = getStorageUsers();
    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    setIndex(index + 1);
  };

  return (
    <>
      <h1>CandidateSearch</h1>
      <button onClick={handleNextUserAndSave}>+</button>
      <button onClick={handleNextUser}>-</button>
      <UserCard
        avatar_url={user.avatar_url}
        name={user.name}
        login={user.login}
        location={user.location}
        company={user.company}
        bio={user.bio}
      />
    </>
  );
};

export default CandidateSearch;
