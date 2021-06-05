import styled, { css } from 'styled-components/macro';
import { Link, NavLink } from 'react-router-dom';

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionNavLink = styled(NavLink)`
  ${OptionStyles};
`;

export const OptionDiv = styled.div`
  ${OptionStyles};
`;
