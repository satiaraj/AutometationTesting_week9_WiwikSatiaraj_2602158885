Feature: Admin User Management

  Scenario Outline: Add new admin user
    Given user is logged in as "<username>" with "<password>"
    And user navigates to Admin page
    When user adds a new admin "<newUsername>" with role "<role>"
    Then the admin "<newUsername>" should appear in the user list

    Examples:
      | username | password  | newUsername   | role   |
      | Admin    | admin123  | Ascypressadmin | Admin  |
      | Admin    | admin123  | Ascypressuser  | ESS    |

  Scenario: Gagal menambahkan user dengan username yang sudah ada
    Given user is logged in as "Admin" with "admin123"
    And user navigates to Admin page
    When user tries to add a new admin "abcd1234" with role "ESS"
    Then system should show error that username already exists

  Scenario: Menghapus user admin yang sudah dibuat
    Given user is logged in as "Admin" with "admin123"
    And user navigates to Admin page
    When user deletes the admin "cypressuser12"
    Then the admin "cypressuser12" should no longer appear in the user list
