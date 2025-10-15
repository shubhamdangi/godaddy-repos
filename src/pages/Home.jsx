import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import { Link } from "react-router-dom";

function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const fetchRepos = async () => {
  const res = await fetch("https://api.github.com/orgs/godaddy/repos");
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
};


  useEffect(() => {
    fetchRepos()
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading-text">Loading repositories...</div>;
  if (error) return <div className="error-text">{error}</div>;

  return (
    <div className="page-container">
      <header className="header">
        <img src="https://hostingcanada.org/app/uploads/2023/04/1280px-GoDaddy_logo.svg_.png" alt="GoDaddy Logo" className="logo" />
        <h1 className="title">GoDaddy Public Repositories</h1>
      </header>

      <div className="repo-grid">
        {repos.map((repo) => (
          <Link key={repo.id} to={`/repo/${repo.name}`} className="repo-link">
            <RepoCard repo={repo} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
