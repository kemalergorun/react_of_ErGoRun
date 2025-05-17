export default function VanillaBootstrap() {
  return (
    <div>
      <h2 className="text-uppercase text-center text-primary">
        Vanilla Bootstrap
      </h2>

      <div className="btn-group w-100 mt-5">
        <button className="btn btn-primary">Add</button>
        <button className="btn btn-dark">Remove</button>
        <button className="btn btn-danger">Clear</button>
      </div>
    </div>
  );
}
