import { Gradients } from '@constants/color';
import styled from '@emotion/styled';






export const BlueLine = styled.div`
    border-bottom: 0.4rem solid;
    font-size: 3.5rem;
    border-image-slice: 1;
    border-image-source: ${Gradients.greenBlueRight};
`

export const YellowLine = styled.div`
    border-bottom: 0.4rem solid;
    font-size: 3.5rem;
    border-image-slice: 1;
    border-image-source: ${Gradients.yellowGreen};
`