import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container my-2">
                <img src="/image/logo.png" className="#" alt="..." width={40} height={40} />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/service">Service</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/contact">Contact</Link>
                    </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="/signup" class="btn btn-outline-primary" disabled>SignUP</Link>&nbsp;
                    <Link href="/signin" class="btn btn-outline-primary" disabled>Signin</Link>&nbsp;
                    </ul>
                </div>
            </div>
        </nav>

    )

}