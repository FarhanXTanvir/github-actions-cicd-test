export default function App() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          color: "black",
          fontSize: "20px",
          backgroundColor: "lightblue",
          padding: "10px",
          border: "2px solid black",
          borderRadius: "5px",
          textAlign: "center",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      >
        Github Actions Success!!
      </button>
    </div>
  );
}
