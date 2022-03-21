import styled from 'styled-components';
import Github from './github.png';
import Linkedin from './linkedin.png';
import Medium from './medium.png';
import Pic from './pic.png';

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
const Logo = styled.img`

        margin: 25px;
  width: 100px;
        height: 100px;
        border-radius: 25px;
`;
const RowContainer = styled.div`
        justify-content: center;
        align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 35px;
`

const Text = styled.span`
  font-family: 'Roboto', 'Rubik', sans-serif;
  font-size: 25px;
  color: white;
`;

export default () => (
    <Container>
        <RowContainer>
            <ColumnContainer>
                <ProfilePic src={Pic}/>
                <Text>{'Sharon Grossman'}</Text>
                <Text>{'Senior Software Developer @ Fabric'}</Text>
            </ColumnContainer>
        </RowContainer>
        <RowContainer>
                        <a target="_blank" href={'https://github.com/sharongrossman'}><Logo src={Github}/></a>
                        <a target="_blank" href={'https://sharongrossman.medium.com/'}><Logo src={Medium}/></a>
                        <a target="_blank" href={'https://www.linkedin.com/in/sharon-grossman/'}><Logo src={Linkedin}/></a>
        </RowContainer>
    </Container>
)
