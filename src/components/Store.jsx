import React from "react";

const Store = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "1000",
      image: "https://i.postimg.cc/jjBShzp6/1000-X-1000.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: "1500",
      image: "https://i.postimg.cc/jjBShzp6/1000-X-1000.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: "2000",
      image: "https://i.postimg.cc/jjBShzp6/1000-X-1000.png",
    },
  ];

  const phoneNumber = "2348109125793"; // Your WhatsApp number

  const handleBuyNow = (product) => {
    const message = `Hello, I would like to buy ${product.name} for ${product.price}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "150px", height: "150px" }}
          />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <button
            onClick={() => handleBuyNow(product)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#25D366",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Store;
