import { useNavigate } from "react-router-dom";

export const GoBack = () => {
    const navigate = useNavigate()
  return (
    <button type="button" onClick={() => navigate('/movies')}>
      Go back
    </button>
  );
};
