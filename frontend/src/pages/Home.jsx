import { Link } from "react-router-dom";
import pottery from "../assets/images/pottery.jpg";
import woodcraft from "../assets/images/woodcraft.jpg";
import jewelry from "../assets/images/jewelry.jpg";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="display-4 fw-bold text-purple">
            Discover Handmade Excellence
          </h1>

          <p className="lead mt-3 text-muted">
            Unique creations crafted with passion and creativity.
          </p>

          <div className="mt-4">
            <Link to="/products" className="btn btn-purple btn-lg me-3 px-4">
              Explore Products
            </Link>

            <Link to="/account" className="btn btn-outline-purple btn-lg px-4">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="container my-5">
        <h2 className="text-center text-purple mb-5 fw-bold">
          Shop by Category
        </h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="category-card">
              <img src={pottery} alt="Pottery" />
              <h5>Pottery</h5>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="category-card">
              <img src={woodcraft} alt="Woodcraft" />
              <h5>Woodcraft</h5>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="category-card">
              <img src={jewelry} alt="Jewelry" />
              <h5>Jewelry</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;