import { css } from 'styled-components';
import { MEDIA_QUERIES } from '../constants/sizes';

export const media = Object.keys(MEDIA_QUERIES).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${MEDIA_QUERIES[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
