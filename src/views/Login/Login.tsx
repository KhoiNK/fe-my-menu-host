import React from "react";
import {
  LoginDivider,
  LoginDividerContainer,
  LoginDividerContent,
  LoginDividerContentContainer,
  ForgotPassword,
  LoginBodyContent,
  LoginContainer,
  LoginContentStyled,
  LoginLogoStyled,
  LoginButton,
  LoginPasswordInput,
  LoginPhoneInput,
  LoginPhoneInputContainer,
  LoginSelectCountry,
  LoginSelectCountryContainer,
  LoginTitle,
  LoginErrorMessage,
} from "./styles";
import Card from "../../components/Card/Card";
import Row from "../../components/Row";
import { useTranslation } from "react-i18next";
import useController from "./useController";
import { Controller } from "react-hook-form";

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { handleSubmit, onNext, errors, control } = useController();
  return (
    <LoginContainer>
      <Card>
        <LoginContentStyled>
          {/* <LoginLogoStyled src="./images/Logo.svg" alt="logo" /> */}
          <LoginTitle>{t("login.title")}</LoginTitle>
          <LoginBodyContent>{t("login.description")}</LoginBodyContent>
          <form onSubmit={handleSubmit(onNext)}>
            {/* <Row>
              <LoginSelectCountryContainer>
                <Controller
                  name="countryCode"
                  control={control}
                  render={({ field }) => (
                    <LoginSelectCountry {...field}>
                      <option value={"+1"}>+1</option>
                      <option value="+12">+12</option>
                      <option value="+13">+13</option>
                    </LoginSelectCountry>
                  )}
                />
              </LoginSelectCountryContainer>
              <LoginPhoneInputContainer>
                
              </LoginPhoneInputContainer>
            </Row> */}
            <Controller
              name="username"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: t("login.input.mobile.errorMessage.required"),
                },
                maxLength: 200,
                minLength: {
                  value: 3,
                  message: t("login.input.mobile.errorMessage.minLength"),
                },
              }}
              render={({ field, fieldState }) => {
                const { error } = fieldState;
                return (
                  <>
                    <LoginPhoneInput
                      placeholder={t("login.input.mobile.placeholder")}
                      maxLength={200}
                      minLength={3}
                      error={error?.message}
                      {...field}
                    />
                    {error && (
                      <LoginErrorMessage>{error.message}</LoginErrorMessage>
                    )}
                  </>
                );
              }}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: t("login.input.password.errorMessage.required"),
                },
                minLength: {
                  value: 6,
                  message: t("login.input.password.errorMessage.minLength"),
                },
              }}
              render={({ field, fieldState }) => {
                const { error } = fieldState;
                return (
                  <>
                    <LoginPasswordInput
                      placeholder={t("login.input.password.placeholder")}
                      type="password"
                      error={error?.message}
                      isError={!!error?.message}
                      {...field}
                    />
                    {error && (
                      <LoginErrorMessage>{error.message}</LoginErrorMessage>
                    )}
                  </>
                );
              }}
            />
            <Row justify="flex-end">
              <ForgotPassword>{t("login.link.forgotPassword")}</ForgotPassword>
            </Row>
            <LoginButton
              text={t("login.button.submit")}
              buttonType="primary"
              type="submit"
            />
          </form>
          <LoginDividerContainer>
            <LoginDivider />
            <LoginDividerContentContainer>
              <LoginDividerContent>{t("login.text.or")}</LoginDividerContent>
            </LoginDividerContentContainer>
          </LoginDividerContainer>
          <LoginButton text={t("login.button.signup")} buttonType="default" />
        </LoginContentStyled>
      </Card>
    </LoginContainer>
  );
};

export default Login;
