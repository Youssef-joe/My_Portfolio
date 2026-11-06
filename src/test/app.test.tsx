import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { articles } from "../lib/articles";

describe("App rendering", () => {
  it("renders HomePage without crashing", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(container).toBeDefined();
    expect(container.textContent).toContain("Youssef Ali Ahmed");
  });

  it("renders /writing without crashing", async () => {
    const { findByText } = render(
      <MemoryRouter initialEntries={["/writing"]}>
        <App />
      </MemoryRouter>
    );
    expect(await findByText(/technical_notebook\.html/i)).toBeDefined();
  });

  it("renders /story without crashing", async () => {
    const { findByText } = render(
      <MemoryRouter initialEntries={["/story"]}>
        <App />
      </MemoryRouter>
    );
    expect(await findByText(/chronicles\.html/i)).toBeDefined();
  });

  it("renders /editor without crashing", async () => {
    const { findByText } = render(
      <MemoryRouter initialEntries={["/editor"]}>
        <App />
      </MemoryRouter>
    );
    expect(await findByText(/cms_studio\.exe/i)).toBeDefined();
  });

  it("renders all articles without crashing", async () => {
    for (const article of articles) {
      const { container } = render(
        <MemoryRouter initialEntries={[`/writing/${article.slug}`]}>
          <App />
        </MemoryRouter>
      );
      expect(container.textContent).toContain(article.title);
    }
  });
});
