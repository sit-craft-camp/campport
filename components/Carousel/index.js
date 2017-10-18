import React from 'react'


const Carousel = () => (
    <div>
        
        <div id="carouselExampleIndicators" className="carousel slide" data-interval="3000" data-ride="carousel">
            <ol className="carousel-indicators">
                <li datatarget="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li datatarget="#carouselExampleIndicators" data-slide-to="1"></li>
                <li datatarget="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="/static/camphub.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/static/CampHUB-pormo-01.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src="/static/opw2017-camphub.png" alt="Second slide"/>
                </div>
            </div>
            
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
)

export default Carousel