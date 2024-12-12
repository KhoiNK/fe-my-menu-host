import styled from "styled-components";
import { toRem } from "../../styles/globalStyle";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: ${toRem(113)} ${toRem(0)};
`;

export const LoginContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const LoginLogoStyled = styled.img`
  max-width: 86px;
`;

export const LoginTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headlineH3};
  font-weight: ${({ theme }) => theme.fontWeights.strong};
  line-height: 32px;
  margin-bottom: ${toRem(8)};
`;

export const LoginBodyContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.bodyB2Regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.grey800};
  margin-top: 0px;
`;

export const LoginPasswordInput = styled(Input)<{ isError: boolean }>`
  /* margin-top: ${({ isError }) => (isError ? 0 : toRem(24))}; */
  margin-bottom: ${({ isError }) => (isError ? 0 : toRem(12))};
  width: 100%;
`;

export const LoginSelectCountryContainer = styled.div`
  width: 100%;
  max-width: 30%;
  padding-right: ${toRem(12)};
`;

export const LoginPhoneInputContainer = styled.div`
  width: 100%;
`;

export const LoginPhoneInput = styled(Input)<{ error?: string }>`
  width: 100%;
  margin-bottom: ${({ error }) => (!!error ? 0 : toRem(24))};
`;

export const LoginSelectCountry = styled.select`
  height: ${({ theme }) => theme.heights.input};
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary200};
  color: ${({ theme }) => theme.colors.grey1000};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  padding: ${toRem(12)};
  appearance: none;
  background-image: url(./images/Chevron.svg);
  background-position: right ${toRem(12)} bottom 50%;
  background-repeat: no-repeat;
  background-size: ${toRem(12)} ${toRem(12)};
`;

export const LoginButton = styled(Button)`
  width: 100%;
  margin-bottom: ${toRem(24)};
`;

export const ForgotPassword = styled.b`
  color: ${({ theme }) => theme.colors.primary500};
  padding-bottom: ${toRem(20)};
`;

export const LoginDividerContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: ${toRem(12)};
  padding-bottom: ${toRem(24)};
`;

export const LoginDivider = styled.div`
  width: 100%;
  height: 1px;
  border-top: ${toRem(1)} solid ${({ theme }) => theme.colors.grey300};
`;

export const LoginDividerContentContainer = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.grey0};
  padding: 0 ${toRem(22)};
`;

export const LoginDividerContent = styled.p`
  margin: 0;
`;

export const LoginErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red600};
  text-align: left;
`;
