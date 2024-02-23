import { useRef } from "react";
import { PortfolioButton, PortfolioCard } from "./components/PortfolioItem";
import "./App.css";


function App() {
  const projects = useRef([
    {
      title: "Project 1",
      description: "elevator pitch",
      image: "https://placekitten.com/750",
      url: null,
      repo: "https://githubsamplelink.com",
      ref: useRef(null),
    },
    {
      title: "Project 2",
      description: "elevator pitch",
      image: "https://placekitten.com/750",
      url: null,
      repo: "https://githubsamplelink.com",
      ref: useRef(null),
    }
  ]);

  const handleClick = (portfolioItem) => {
    portfolioItem.ref.current.scrollIntoView();
  }

  return (
    <>
    <div className="fluid-container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => window.scroll(0,0)}>
            Theresa Barkasy
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
             {projects.current.map((portfolioItem, index) => (
              <PortfolioButton 
                onClick={() => handleClick(portfolioItem)}
                title={portfolioItem.title}
                key={index}
              />
             ))}
            </ul>
          </div>
        </div>
      </nav>
    <div className="container d-flex flex-column gap-3" style={{ paddingTop: "7.5rem" }}>
      {projects.current.map((portfolioItem, index) => (
        <PortfolioCard
        maxWidth="100%"
        portfolioItem={portfolioItem}
        key={index}
        ref={portfolioItem.ref}
        />
      ))}
    </div>
    </div>
    


    </>
  );
}

export default App;
