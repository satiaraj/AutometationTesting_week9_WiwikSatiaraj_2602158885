import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given("user is on the login page", () => {
  loginPage.visit();
});

When("user logs in using username {string} and password {string}", (username, password) => {
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
  loginPage.submit();
});

Then("user should see the dashboard page", () => {
  loginPage.assertDashboardVisible();
  cy.screenshot('dashboard-visible'); 
});

Then("user should see login error message", () => {
  loginPage.assertLoginErrorVisible();
});
