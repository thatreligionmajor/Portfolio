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
            <img src={portfolioItem.image} class="img-fluid rounded-start object-fit-cover" alt={portfolioItem.title} />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{portfolioItem.title}</h5>
                    <p class="card-text text-start">{portfolioItem.description}</p>
                    <div class="d-flex flex-row gap-3 justify-content-start">
                        {portfolioItem.url ? (
                            <a class="btn btn-success bg-gradient" href={portfolioItem.url} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-fullscreen me-1" viewBox="0 0 16 16">
                                    <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                    <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
                                </svg>
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
                            <a class="btn btn-warning bg-gradient" href={portfolioItem.repo} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github me-1" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                                See the code
                            </a>
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