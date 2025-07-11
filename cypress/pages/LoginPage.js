class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com');
    }
  
    fillUsername(username) {
      cy.get('input[name="username"]').clear().type(username);
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').clear().type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    assertDashboardVisible() {
      cy.get('h6').should('contain', 'Dashboard');
    }
  
    assertLoginErrorVisible() {
      cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    }
  }
  
  export default LoginPage;
  