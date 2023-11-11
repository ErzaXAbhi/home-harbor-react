import React from "react";

const Hero = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="menu">
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Sustainabilty</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <section className="hero-heading">
        <h1>
          Home <span>Harbor</span>
        </h1>
      </section>
      <section className="hero-footer">
        <h2>
          Timeless Furniture Creafted <br /> For Comfort And Style.
        </h2>
        <p>
          Immerse Yourself in a world of handcrafted furniture that seamlessly
          blends elegance with functionality.
        </p>
        <form className="d-flex bg-light">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter item name"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-dark bg-dark text-white"
            type="submit"
          >
            Search now <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </form>
      </section>
    </div>
  );
};

export default Hero;
