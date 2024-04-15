import styled, {css} from 'styled-components';

export const StyledCareersForm = styled.section`
  ${({theme}) => css`
  position: absolute;
    padding: ${theme.spacing.global_padding_sides};
    min-height: 100%;
    top: 0;
    left: 0;
    background: ${theme.colors.white_auxiliary.white_light};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `}

`