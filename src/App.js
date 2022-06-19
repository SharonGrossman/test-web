import styled from 'styled-components';
import {Github} from './Github';
import {Linkedin} from './Linkedin';
import {Medium} from './Medium';
import Profile from './profilepic.png';
import { ButtonUnstyled  } from '@mui/core';
import { Link } from '@mui/material';

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
font-family: 'Poppins', sans-serif;
font-size: 25px;
font-weight: 900;
  color: white;
  margin-bottom: 15px;
`;

const SmallerText = styled.span`
  font-size: 25px;
  color:white;
`

const Name = styled.span`
font-family: 'Poppins', sans-serif;
font-size: 54px;
  color: white;
  font-weight: bolder;
  margin-bottom: 15px;
`;

const ProfilePic = styled.img`
  height: 30%;
  width: 30%;
  margin-bottom: 35px;
`

const CustomButton = styled(ButtonUnstyled)`
  font-family: 'Poppins', sans-serif;
  font-weight: 0;
  font-size: 0.875rem;
  background-color: inherit;
  padding: 12px 24px;
  border-radius: 25px;
  margin: 10px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #0d0d0d;
  }
`;

export default () => (
    <Container>
        <RowContainer>
            <ColumnContainer>
            <ProfilePic src={Profile}/>
                <Name>{`Hello, I'm Sharon Grossman!`}</Name>
                <Text>{`Senior Software Engineer & Open Source Enthusiast`}</Text>                
                <RowContainer>
                <CustomButton target="_blank" component={Link} href={'https://github.com/sharongrossman'}>
                  <RowContainer>
                  <Github/>
                  <SmallerText>{'Code'}</SmallerText>
                  </RowContainer>
                  </CustomButton>

                  <CustomButton target="_blank" component={Link} href={'https://sharongrossman.medium.com'}>
                  <RowContainer>
                  <Medium/>
                  <SmallerText>{'Blog'}</SmallerText>
                  </RowContainer>
                  </CustomButton>
                  <CustomButton target="_blank" component={Link} href={'https://www.linkedin.com/in/sharon-grossman/'}>
                  <RowContainer>
                  <Linkedin/>
                  <SmallerText>{'Resume'}</SmallerText>
                  </RowContainer>
                  </CustomButton>
                </RowContainer>
            </ColumnContainer>
        </RowContainer>
    </Container>
)
