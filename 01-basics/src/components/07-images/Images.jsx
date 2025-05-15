import dog from "../../assets/images/dog.jpg";

export default function Images() {
  return (
    <div>
      <h2>IMPORTING IMAGES</h2>
      <h3>1- GETTING IMAGE FROM EXTERNAL SOURCE</h3>
      {/* Write the source ulr directly inside src */}
      <img
        src="https://images.pexels.com/photos/31735589/pexels-photo-31735589/free-photo-of-minimalist-artichoke-on-wooden-tabletop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Artichoke"
        style={{
          width: "400px",
        }}
      />

      <h3>2- GETTING THE IMAGE FROM PUBLIC FOLDER - STATIC IMPORT</h3>
      {/* Imagine yourself inside the public folder, and start showing the location of the image from there. Because we are inside the public folder, the source must start with a forward slash / */}
      <img src="/dog.jpg" alt="Cute dog" />

      <h3>3- IMPORTING THE IMAGES FROM SRC</h3>
      {/* Use named import statement, get the image, and use this javascript name inside the src attribute */}
      <img src={dog} alt="Cute dog again" />
    </div>
  );
}
