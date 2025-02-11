// Create an interface for the Candidate objects returned by the API

export default interface Candidate {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  company: string;
  bio: string;
}
