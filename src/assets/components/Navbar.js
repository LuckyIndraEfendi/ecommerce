import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg  navbar-dark fixed-top p-2">
        <div class="container">
          <a class="navbar-brand logo" href="#">
            LUCKYSTORE
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <form class="d-flex search" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-light " type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
            <ul class="navbar-nav nav-menu">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Top Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cara Berbelanja
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Tentang Kami
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
