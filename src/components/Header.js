import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
    background-color: #f584f1;
    font-size: 2.5rem;
    text-align: center;
    padding: 3rem;
    border-radius: 1rem;
`

const ContainerTitle = styled.span`
    font-size: 2.5rem;
    color: rgb(10, 10, 10);
    font-weight: bolder;
`

const Header = () => {

    return( 
        <Container as={motion.header} initial="hidden"
        animate="visible">
            <ContainerTitle>
                Vorwärts
            </ContainerTitle>
        </Container>
    )
}

export default Header