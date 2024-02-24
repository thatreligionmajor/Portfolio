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

const PortfolioCard = 
    forwardRef(function project(
        { portfolioItem, maxWidth="540px" },
        ref
    ) {
    return (
    <div ref={ref} class="card mb-3 border-dark" style={{maxWidth: maxWidth}}>
        <div class="row g-0">
            <div class="col-md-4">
            <img src={portfolioItem.image} class="img-fluid rounded-start cover" alt={portfolioItem.title} />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{portfolioItem.title}</h5>
                    <p class="card-text text-start">{portfolioItem.description}</p>
                    <div class="d-flex flex-row gap-3 justify-content-start">
                        {portfolioItem.url ? (
                            <a class="btn btn-success bg-gradient" href={portfolioItem.url} target="_blank" rel="noopener noreferrer">
                                See it in action
                            </a>
                        )
                        : 
                        ( 
                            "" 
                        )    
                        }
                        {portfolioItem.repo ? 
                        (
                            <a class="btn btn-warning bg-gradient" href={portfolioItem.repo} target="_blank" rel="noopener noreferrer">See the code</a>
                        )
                        : 
                        (
                            ""
                        ) 
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
});

export {
    PortfolioButton,
    PortfolioCard
} 