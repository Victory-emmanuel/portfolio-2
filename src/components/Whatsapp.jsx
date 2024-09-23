const Whatsapp = () => {
  const message = "Hello, I am interested in your services!"; // Your custom message
  const phoneNumber = "2348109125793"; // Your WhatsApp number

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#25D366",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Message me on WhatsApp
    </button>
  );
};

export default Whatsapp;
