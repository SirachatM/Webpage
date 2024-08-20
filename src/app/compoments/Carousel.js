import Image from "next/image"
import React from "react"

export default function Carousel() {
    return (

        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/image/SZA1.jpg" className="d-block w-100" alt="..." width={1720} height={960} />
                    </div>
                    <div className="carousel-item">
                        <Image src="/image/max.jpg" className="d-block w-100" alt="..." width={1720} height={960} />
                    </div>
                    <div className="carousel-item">
                        <Image src="/image/tyler.jpg" className="d-block w-100" alt="..." width={1720} height={960} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )
}

