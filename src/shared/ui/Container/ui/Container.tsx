import {FC, ReactNode} from "react";
import styled from "styled-components";

interface IContainerProps {
    children: ReactNode
}

const StyledContainer = styled.div`
  width: 1290px;
  margin: 0 auto;
`

const Container: FC<IContainerProps> = (props) => {
    return (
        <StyledContainer {...props}></StyledContainer>
    )
}

export default Container
