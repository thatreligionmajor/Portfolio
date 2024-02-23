import { useRef } from "react";
import { PortfolioButton, PortfolioCard } from "./components/PortfolioItem";
import { PortfolioSection } from "./components/ProfileSection";
import "./App.css";


function App() {
  const projects = useRef([
    {
      title: "Quantum Eats",
      description: "A molecular gastronomy restaurant website, built from scratch with HTML, CSS, PHP, and MySQL.",
      image: "/src/assets/quantum-eats-desktop-homepage.png",
      url: null,
      repo: "https://github.com/thatreligionmajor/Quantum-Eats",
      ref: useRef(null),
    },
    {
      title: "Worst Con Ever",
      description: "An ironic and playful comic book convention app created from scratch, using back and front end technologies such as Python, Flask, SQL, JavaScript, React, and REST APIs.",
      image: "https://placekitten.com/750",
      url: null,
      repo: "https://github.com/thatreligionmajor/Worst-Convention-Ever",
      ref: useRef(null),
    }
  ]);

  const handleClick = (portfolioItem) => {
    portfolioItem.ref.current.scrollIntoView();
  }

  return (
    <>
    <div className="fluid-container">
      {/* Navbar Section Starts Here */}
      <nav class="navbar navbar-expand-lg fixed-top fade-down">
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
      {/* Profile Section Starts Here */}
      <div style={{ paddingTop: "7.5rem" }}>
        <PortfolioSection />
      </div>
      {/* Project Section Starts Here */}
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
      {/* Footer Section Starts Here */}
      
    </div>
    </>
  );
}

export default App;
