export default function InlineStyling() {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "1rem",
        textAlign: "justify",
        borderRadius: "10px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "red",
        }}
      >
        INLINE STYLING
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at
        veniam ad voluptatem, nostrum nemo soluta facere? Non magnam animi,
        ipsam odio doloribus voluptatibus! Itaque ratione tempora enim
        dignissimos quaerat.
      </p>

      <p
        style={{
          fontStyle: "italic",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        omnis a ex quo illum delectus laborum, magni officia nesciunt blanditiis
        exercitationem molestiae, dolorum sed! Voluptas tempora commodi harum ea
        recusandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nihil
        debitis vero, perferendis nostrum omnis veritatis praesentium minus ab
        optio aliquam quo sit cum magni adipisci repellendus magnam itaque eum.
      </p>
    </div>
  );
}
