export default function InternalStyling() {
  const containerStyle = {
    border: "1px solid springgreen",
    padding: "1rem",
    marginTop: "1rem",
    borderRadius: "1rem",
    textAlign: "justify",
    backgroundColor: "beige",
  };

  const h2Style = {
    textAlign: "center",
    color: "springgreen",
  };

  const italicStyle = {
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle}>
      <h2 style={h2Style}>INTERNAL STYLING</h2>

      <p style={italicStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
        beatae nemo officia laudantium animi suscipit odio quisquam. Iste beatae
        voluptate ab dicta nesciunt numquam cumque ratione itaque porro laborum!
      </p>

      <p style={italicStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
        beatae nemo officia laudantium animi suscipit odio quisquam. Iste beatae
        voluptate ab dicta nesciunt numquam cumque ratione itaque porro laborum!
      </p>

      <p style={{ ...italicStyle, fontWeight: "bold" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
        beatae nemo officia laudantium animi suscipit odio quisquam. Iste beatae
        voluptate ab dicta nesciunt numquam cumque ratione itaque porro laborum!
      </p>
    </div>
  );
}
