export default function App() {
  const isTheTruth = true;

  return (
    <p style={{ color: isTheTruth ? "green" : "red" }}>
      "Planet Earth is round"
    </p>
  );
}
