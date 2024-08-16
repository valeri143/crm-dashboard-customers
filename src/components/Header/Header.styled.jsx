import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #5932ea,
    0 0 10px #5932ea,
    0 0 20px #5932ea,
    0 0 40px #5932ea,
    0 0 80px #5932ea;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #5932ea; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #5932ea,
      0 0 10px #5932ea,
      0 0 20px #5932ea,
      0 0 40px #5932ea,
      0 0 80px #5932ea;
  }
`;
