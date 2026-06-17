export default function Fallback() {
  return (
    <div className="page">
      <div className="section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
          alt="Error"
        />
        <div>
          <h2>Oops! Something went wrong.</h2>
          <p>Please try refreshing the page or contact support.</p>
        </div>
      </div>
    </div>
  );
}
