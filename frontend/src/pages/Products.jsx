function Products() {
  const products = [
    { id: 1, name: "Handmade Vase", desc: "Beautiful ceramic craft." },
    { id: 2, name: "Wooden Sculpture", desc: "Carved with precision." },
    { id: 3, name: "Decor Lamp", desc: "Elegant handcrafted lamp." },
  ];

  return (
    <div>
      <h2 className="text-purple mb-5 fw-bold">Our Collection</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm border-0 product-card">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{product.name}</h5>
                <p className="card-text text-muted">{product.desc}</p>
                <button className="btn btn-purple btn-sm mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;