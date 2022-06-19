import styled from 'styled-components';
import {Github} from './Github';
import {Linkedin} from './Linkedin';
import {Medium} from './Medium';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RowContainer = styled.div`
        justify-content: center;
        align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
`;

const Text = styled.span`
  font-family: 'Roboto', 'Rubik', sans-serif;
  font-size: 25px;
  color: white;
`;

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;  
  font-size: 64px;
  color: white;
  font-weight: bold;
  margin-bottom: 25px;
`;

export default () => (
    <Container>
        <RowContainer>
            <ColumnContainer>
                <Name>{`Hello, I'm Sharon Grossman!`}</Name>
                <RowContainer>
                <Text>{'Senior Software Engineer | Open Source Enthusiast'}</Text>
                <a target="_blank" href={'https://github.com/osskit'}><Text>{` | @osskit`}</Text></a>
                </RowContainer>
                <RowContainer>
                    <a target="_blank" href={'https://github.com/sharongrossman'}><Github/></a>
                    <a target="_blank" href={'https://sharongrossman.medium.com/'}><Medium/></a>
                    <a target="_blank" href={'https://www.linkedin.com/in/sharon-grossman/'}><Linkedin/></a>
                </RowContainer>
            </ColumnContainer>
        </RowContainer>
    </Container>
)
