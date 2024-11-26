import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  const styles = {
    button: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "1.5rem",
      color: "#ff5200",
      textDecoration: "none",
    },
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBack} style={styles.button}>
      &larr; GO BACK
    </button>
  );
}
