class AdminPage {
    navigateToAdmin() {
      cy.get(':nth-child(1) > .oxd-main-menu-item').click(); // Menu "Admin"
    }
  
    clickAddButton() {
      cy.contains('button', 'Add').click();
    }
  
    selectUserRole(role) {
      cy.get('.oxd-select-wrapper').eq(0).click();
      cy.contains('.oxd-select-option', role).click();
    }
  
    selectStatus(status = 'Enabled') {
      cy.get('.oxd-select-wrapper').eq(1).click();
      cy.contains('.oxd-select-option', status).click();
    }
  
    enterEmployeeName(name = 'jhons') {
      cy.get('input[placeholder="Type for hints..."]').type(name);
      cy.contains('.oxd-autocomplete-option', name, { timeout: 10000 })
        .should('be.visible')
        .click();
    }
  
    // enterUsername(username='cypressadmin1') {
    //     cy.contains('label', 'Username')
    //     .closest('.oxd-input-group')
    //     .find('input')
    //     .type(username);
    // }
    // enterUsername(username='cypressadmin1') {
    //     cy.get('input[placeholder="Username"]').clear().type(username);
    //   }

    enterUsername(username) {
        cy.contains('label', 'Username')
          .closest('.oxd-input-group')
          .find('input')
          .clear()
          .type(username);
      }
      
  
    enterPassword(password='Test1234!') {
        cy.contains('label', 'Password')
        .closest('.oxd-input-group')
        .find('input')
        .type(password);
  
        cy.contains('label', 'Confirm Password')
        .closest('.oxd-input-group')
        .find('input')
        .type(password);
    }
    // enterPassword(password='Test1234!') {
    //     cy.get('input[type="password"]').eq(0).type(password);
    //     cy.get('input[type="password"]').eq(1).type(password);
    //   }
  
    clickSave() {
      cy.contains('button', 'Save').click();
    }
  
    // searchUser(username) {
    //     cy.url().then((url) => {
    //       if (url.includes('/admin/viewSystemUsers')) {
    //         cy.contains('label', 'Username')
    //           .parent()
    //           .find('input')
    //           .clear()
    //           .type(username);
    //         cy.contains('button', 'Search').click();
    //       } else {
    //         throw new Error('Not on the Admin user list page');
    //       }
    //     });
    //   }
      
    searchUser(username) {
        cy.url().should('include', '/admin/viewSystemUsers');
      
        cy.contains('label', 'Username')
          .closest('.oxd-input-group')
          .find('input')
          .should('be.visible')
          .clear()
          .type(username, { force: true });
      
        cy.contains('button', 'Search').click();
      
        cy.get('.oxd-table-body', { timeout: 10000 }).should('exist');
      
        cy.get('.oxd-table-body .oxd-table-row').then(($rows) => {
          if ($rows.length === 0) {
            throw new Error(`Tidak ditemukan user dengan username: ${username}`);
          } else {
            cy.wrap($rows).should('contain.text', username);
          }
        });
      }
      
      
      
      
    // enterUsername(username = 'cypressadmin123') {
    //     cy.url().then((url) => {
    //       if (url.includes('/admin/saveSystemUser')) {
    //         // Halaman Add User
    //         cy.contains('label', 'Username')
    //           .closest('.oxd-input-group')
    //           .find('input')
    //           .clear()
    //           .type(username);
    //       } else {
    //         // Mungkin di halaman Admin list
    //         cy.get('input[placeholder="Username"]')
    //           .clear()
    //           .type(username);
    //       }
    //     });
    //   }
      
    // searchUser(username) {
    //     cy.get('input[placeholder="Username"]').clear().type(username);
    //     cy.contains('button', 'Search').click();
    //   }
    verifyUserExists(username) {
      cy.get('.oxd-table-body').should('contain.text', username);
    }
  
    verifyUserDoesNotExist(username) {
      cy.get('.oxd-table-body').should('not.contain.text', username);
    }
  
    verifyUsernameExistsError() {
      cy.get('.oxd-input-group__message')
        .should('contain.text', 'Already exists');
    }
  
    deleteUser(username) {
      this.searchUser(username);
      cy.wait(1000);
      cy.get('.oxd-table-card').contains(username).parents('div.oxd-table-row').within(() => {
        cy.get('i.bi-trash').click();
      });
      cy.get('.oxd-dialog-container .oxd-button--label-danger').click();
    }
  }
  
  export default AdminPage;
  