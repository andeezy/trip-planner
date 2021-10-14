import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled(LinkScroll)`
  border-radius: 0 10px 10px 0;
  background: ${({ primary }) => (primary ? '#DBA800' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 40px' : '14px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#DBA800')};
  }
`
export const SearchButton = styled(LinkRouter)`
  border-radius: 0 10px 10px 0;
  background: ${({ primary }) => (primary ? '#DBA800' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 40px' : '14px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#DBA800')};
  }
`