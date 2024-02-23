import { forwardRef } from "react";

const PortfolioButton = ({ title, onClick }) => {
    return (
        <li class="nav-item">
            <a class="nav-link" onClick={onClick}>
                {title}
            </a>
        </li>
    )
}

const PortfolioCard = ({ portfolioItem }) => {
    return (
    <div class="card mb-3" style={{maxWidth:"540px"}}>
        <div class="row g-0">
            <div class="col-md-4">
            <img src={portfolioItem.image} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{portfolioItem.title}</h5>
                <p class="card-text">{portfolioItem.description}</p>
                <p class="card-text">
                    {portfolioItem.url ?
                        <a class="" href={portfolioItem.url} target="_blank" rel="noopener noreferrer">See it in action</a>
                    : ""    
                    }
                    {portfolioItem.repo ?
                        <a class="" href={portfolioItem.repo} target="_blank" rel="noopener noreferrer">See the code</a>
                    : ""
                    }
                </p>
            </div>
            </div>
        </div>
    </div>
    )
}
export {
    PortfolioButton,
    PortfolioCard
} 