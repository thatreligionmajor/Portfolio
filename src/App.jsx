import { useRef } from "react";
import { PortfolioButton, PortfolioCard } from "./components/PortfolioItem";
import { PortfolioSection } from "./components/ProfileSection";
import "./App.css";


function App() {
  const projects = useRef([
    {
      title: "Quantum Eats",
      description: 
        (
          <>
            A molecular gastronomy restaurant website, built from scratch with
            HTML, CSS, PHP, and MySQL.
            <br />
            <br />
            <h6>Features:</h6>
            <br />
            Interactive Menu: Explore a curated menu of molecular gastronomy dishes, each with detailed descriptions and images.
            <br />
            Order Placement: Easily navigate through the menu to select and place orders for your desired dishes.
            <br />
            Dynamic Navigation: Seamless navigation between different food items, categories, and sections of the website.
            <br />
            Admin Management: Add and delete admin users to manage website operations securely.
            <br />
            Order Management: View, manage, and track orders placed by customers in real time. Update order statuses to keep customers informed about their order progress.
            <br />
            Menu Management: Add, update, and delete menu items with ease, allowing for flexibility in showcasing culinary creations. Organize menu items into categories for better navigation and presentation.
            <br />
            Authentication: Secure login system for admin users to access backend functionalities and perform administrative tasks.
            <br />
            Data Persistence: Utilize databases to store and retrieve information about menu items, orders, and admin users for seamless data management.
            <br />
            User-Friendly Interface: Intuitive and responsive user interface design for both frontend and backend, ensuring a pleasant browsing and administrative experience.
            <br />
            Security Measures: Implement security measures to protect sensitive information and prevent unauthorized access to administrative features.
          </>
        ),
      image: "/assets/quantum-eats-desktop-homepage.png",
      url: null,
      repo: "https://github.com/thatreligionmajor/Quantum-Eats",
      ref: useRef(null),
    },
    {
      title: "Worst Con Ever",
      description: 
        (
          <>
          An ironic and playful comic book convention app created from scratch, using back and front end technologies such as Python, Flask, SQL, JavaScript, React, and REST APIs.
          <br/>
          <br />
          <h6>Features:</h6>
          <br />
          Event Information: Display detailed information about the event, including dates, location, and schedule.
          <br />
          Guests and Speakers: Showcase a list of special guests, speakers, and panelists attending the event. Preview their work on site.
          <br />
          Exhibitors and Vendors: Highlight exhibitors and vendors participating in the convention, along with their products and services.
          <br />
          Schedule and Agenda: Present a comprehensive schedule and agenda of events, including panels, workshops, screenings, and performances.
          </>
        ),
      image: "/assets/worst-con-ever.png",
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
