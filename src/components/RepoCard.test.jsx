import { render, screen } from "@testing-library/react";
import RepoCard from "./RepoCard";

test("renders repo info", () => {
  const mockRepo = {
    name: "test-repo",
    description: "Simple test description",
    stargazers_count: 5,
    forks_count: 2,
    watchers_count: 3,
  };

  render(<RepoCard repo={mockRepo} />);

  expect(screen.getByText("test-repo")).toBeInTheDocument();
  expect(screen.getByText("Simple test description")).toBeInTheDocument();
  expect(screen.getByText(/⭐ 5/)).toBeInTheDocument();
});
