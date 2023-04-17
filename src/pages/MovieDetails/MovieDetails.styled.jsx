import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
`;

export const LinkGoBack = styled(Link)`
  padding: 5px;
  border: 1px solid black;
  border-radius: 8px;
  :hover,
  :focus {
    background-color: blue;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const MoviePoster = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 15px;
`;

export const MovieInformation = styled.div`
  display: block;
`;

export const MovieInformationItem = styled.li`
  margin-bottom: 15px;
`;

export const FilmInfo = styled.ul`
  display: flex;
`;

export const FilmInfoItem = styled.li`
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 15px;
  :hover,
  :focus {
    background-color: blue;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
