import React from 'react'

const Carousel = () => (
    <div>
        
        <div id="carouselExampleIndicators" className="carousel slide" d  ataride="carousel">
            <ol className="carousel-indicators">
                <li datatarget="#carouselExampleIndicators" dataslideTo="0" className="active"></li>
                <li datatarget="#carouselExampleIndicators" dataslideTo="1"></li>
                <li datatarget="#carouselExampleIndicators" dataslideTo="2"></li>
            </ol>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="/static/camphub.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/static/CampHUB-pormo-01.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/static/opw2017-camphub.png" alt="Second slide"/>
                </div>
            </div>
            
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" dataSlide="prev">
                <span className="carousel-control-prev-icon" ariaHidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" dataSlide="next">
                <span className="carousel-control-next-icon" ariaHidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
)

export default Carousel