import styled from 'styled-components';

export const ContainerCast = styled.div`
  background-color: gray;
`;
export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
`;

export const CastItem = styled.li`
  border: 1px solid black;
  flex-basis: calc((100% - 60px) / 6);
  display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 10%;
`;
