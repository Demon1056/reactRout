import { useNavigate } from 'react-router-dom';

export const GoBack = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(path || '/')}>
      Go back
    </button>
  );
};
