import Image from "next/image";

export default function Card() {
    return (
        <>
           <div className="container mt-5">
    <div className="row">
        <div className="col-md-4 mb-3">
            <div className="card" >
                <img src="/image/brb.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">do me right</h5>
                    <p className="card-text">brb.</p>
                    <a href="#" className="btn btn-primary">Click here</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="card" >
                <img src="/image/N3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Sprinter</h5>
                    <p className="card-text">Central Cee and Dave</p>
                    <a href="#" className="btn btn-primary">Click here</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="card" >
                <img src="/image/illit.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Magnetic</h5>
                    <p className="card-text">ILLIT</p>
                    <a href="#" className="btn btn-primary">Click here</a>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )


}