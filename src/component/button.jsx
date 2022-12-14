import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background-color: ${({primary}) => (primary ? '#01bf71' : "#010606")};
  /* white-space: nowrap; */
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? "#010606" : "#fff")};
  font-size: ${({fontBig}) => (fontBig ? "22px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ primary }) => (primary ? '#fff' : "#01bf71")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  }
`