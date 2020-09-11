import styled from 'styled-components';
import CustomButtonComponent from '../../components/custom-button/custom-button';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${props => props.theme.fonts.primary};

  padding: 32px 0;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 50px;
`;

export const CustomButton = styled(CustomButtonComponent)`
  border-radius: 50%;
  padding: 0;
  width: 50px;
  height: 50px;
  margin-top: 12px;
`;

export const ItemList = styled.div`
  margin-top: 22px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  & > div {
    width: 350px;
    height: 420px;

    background-color: ${props => props.theme.colors.placeholderBackground};
  }
`;
