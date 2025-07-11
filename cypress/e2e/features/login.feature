Feature: Login OrangeHRM

  Scenario Outline: User logs in with valid credentials
    Given user is on the login page
    When user logs in using username "<username>" and password "<password>"
    Then user should see the dashboard page

    Examples:
      | username | password  |
      | Admin    | admin123  |

  Scenario: User fails to login with invalid credentials
    Given user is on the login page
    When user logs in using username "wronguser" and password "wrongpass"
    Then user should see login error message
