import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 20px;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 25px;
  list-style: none;
  gap: 20px;
`;

export const MovieItem = styled.div`
  width: 300px;
  height: 200px;
`;

export const FilmName = styled.p`
  padding: 10px;
  text-align: center;
`;
