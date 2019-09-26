import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { gray, primary, tertiary } from '../../design/colors'
import { sanSerif, serif } from '../../design/fonts'

export const BookStyles = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0.8rem 0;
`

export const BookDetails = styled('div')`
  font-family: ${serif};
  margin: 0.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
`
export const Title = styled('div')`
  font-size: 1.2rem;
  color: ${primary.primary2};
`

export const Author = styled('div')`
  font-size: 0.9rem;
  color: ${gray.gray3};
`

export const ReadDate = styled('div')`
  font-size: 0.6rem;
  color: ${gray.gray3};
  font-family: ${sanSerif};
`
export const CoverImage = styled('img')`
  width: 8rem;
  box-shadow: 0px 0px 7px 0px ${gray.gray3};
  max-height: 12rem;
  margin: 0.2rem 0;
  transition: box-shadow 0.8s ease-in;

  &:hover {
    box-shadow: 0px 0px 14px 0px ${tertiary.tertiary5};
  }
`
export const BookDisplay = styled('div')`
  text-align: center;
`
