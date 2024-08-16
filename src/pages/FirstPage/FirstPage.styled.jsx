import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #5932ea,
    0 0 10px #5932ea,
    0 0 20px #5932ea,
    0 0 40px #5932ea,
    0 0 80px #5932ea;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
