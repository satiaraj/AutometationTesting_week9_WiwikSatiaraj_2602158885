# BDD + Cypress Web Automation_2602158885_WiwikSatiaraj
# OrangeHRM Admin User Management - Cypress E2E Testing

This project is a Cypress end-to-end test suite for the OrangeHRM application, focusing on the **Admin User Management** module using **Cucumber BDD (Behavior Driven Development)**.

---

## 📁 Project Structure

```
assignment9_cypress_Bootcam_qa/
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       └── admin.feature           # Feature file for admin scenarios
│   ├── pages/
│   │   ├── AdminPage.js               # Page Object for Admin page
│   │   └── LoginPage.js               # Page Object for Login page
├── support/
│   └── e2e.js                         # Support commands
├── cypress.config.js                 # Cypress configuration
├── package.json                      # NPM dependencies
└── README.md                         # Project documentation
```

---

## 🧪 What’s Tested?

### Feature: Admin User Management

**Scenarios:**
1. ✅ Add new admin user with different roles (Admin, ESS)
2. ❌ Try to add user with existing username (expect error)
3. 🗑️ Delete an existing user and verify it's removed

These scenarios are written using **Gherkin syntax** in `.feature` files.

---

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd assignment9_cypress_Bootcam_qa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npx cypress open   # For interactive mode
   npx cypress run    # For headless mode
   ```

---

## 🚀 Tools & Frameworks

- [Cypress](https://www.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- JavaScript (ES6)
- Page Object Model (POM)

---

## 📝 Notes

- Credentials used:
  - Username: `Admin`
  - Password: `admin123`

- Default employee used for new user: `Ranga` / `Stephen`
- Default password: `Test1234!`

---

## 💡 Tips

- Prefer using:
  ```js
  cy.contains('label', 'Username').closest('.oxd-input-group').find('input')
  ```
  over:
  ```js
  cy.get('input[placeholder="Username"]')
  ```
  because the placeholder might not be reliable across environments.

---

## 📸 Screenshots

Screenshots are automatically saved for failed or successful steps if configured via Cypress settings.

---

## 🧑‍💻 Author

Bootcamp QA Automation Assignment  
By: Wiwik Satiaraj
