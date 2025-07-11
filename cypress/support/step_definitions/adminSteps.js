import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import AdminPage from "../../pages/AdminPage";

const loginPage = new LoginPage();
const adminPage = new AdminPage();

Given('user is logged in as {string} with {string}', (username, password) => {
  loginPage.visit();
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
  loginPage.submit();
});

Given('user navigates to Admin page', () => {
  adminPage.navigateToAdmin();
});

When('user adds a new admin {string} with role {string}', (newUsername, role) => {
  adminPage.clickAddButton();
  adminPage.selectUserRole(role);
  adminPage.enterEmployeeName(); // default 'Stephen'
  adminPage.selectStatus('Enabled'); // default
  adminPage.enterUsername(newUsername);
  adminPage.enterPassword('Pass1234!');
  adminPage.clickSave();
});


Then('the admin {string} should appear in the user list', (username) => {
  adminPage.navigateToAdmin(); // ⬅️ Tambahkan ini agar kembali ke halaman list
  adminPage.searchUser(username);
  adminPage.verifyUserExists(username);
});


When('user tries to add a new admin {string} with role {string}', (username, role) => {
    adminPage.clickAddButton();
    adminPage.selectUserRole(role);
    adminPage.enterUsername(username);
    adminPage.enterPassword('Pass1234!');
    adminPage.clickSave();
  });
  
  Then('system should show error that username already exists', () => {
    adminPage.verifyUsernameExistsError();
  });
  
  When('user deletes the admin {string}', (username) => {
    adminPage.deleteUser(username);
  });
  
  Then('the admin {string} should no longer appear in the user list', (username) => {
    adminPage.verifyUserDoesNotExist(username);
  });
  