function Footer() {
  return (
    <footer className="bg-white border-top mt-5 py-4">
      <div className="container text-center">
        <p className="mb-1 fw-semibold text-purple">
          Artisan's Corner
        </p>
        <small className="text-muted">
          © {new Date().getFullYear()} All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;