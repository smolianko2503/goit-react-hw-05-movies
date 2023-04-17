import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 30px;
  width: 250px;
`;
export const SearchButton = styled.button`
  height: 30px;
  :hover {
    background-color: green;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const MoviesContainer = styled.div`
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

export const MovieItem = styled.div``;

export const MovieImg = styled.img`
  height: 169px;
  width: 300px;
`;

export const FilmName = styled.p`
  padding: 10px;
  text-align: center;
  width: 300px;
`;
