function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h2 className="repo-name">{repo.name}</h2>
      <p className="repo-desc">
        {repo.description || "No description provided."}
      </p>
      <div className="repo-meta">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>👀 {repo.watchers_count}</span>
      </div>
    </div>
  );
}

export default RepoCard;
