import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RepoDetails() {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/godaddy/${repoName}`)
      .then((res) => res.json())
      .then(setRepo);
  }, [repoName]);

  if (!repo) return <div className="loading-text">Loading...</div>;

  return (
    <div className="page-container">
      <Link to="/" className="back-btn">← Back</Link>

      <div className="repo-details-card">
        <h1 className="repo-title">{repo.name}</h1>
        <p className="repo-desc">{repo.description || "No description."}</p>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="repo-link-btn"
        >
          View on GitHub ↗
        </a>

        <ul className="repo-stats">
          <li><strong>Language:</strong> {repo.language || "N/A"}</li>
          <li><strong>Forks:</strong> {repo.forks_count}</li>
          <li><strong>Open Issues:</strong> {repo.open_issues_count}</li>
          <li><strong>Watchers:</strong> {repo.watchers_count}</li>
        </ul>
      </div>
    </div>
  );
}

export default RepoDetails;
