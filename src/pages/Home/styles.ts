import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`

export const DayContainer = styled.div`
  margin: 0 0 1rem 0;
`

export const GamesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;
  margin: 1rem 0 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: initial;
  }
`
