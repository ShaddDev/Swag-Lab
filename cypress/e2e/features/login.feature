Feature: User Login

As a user i want to be able to login to the Swag Labs app successfully 

  Scenario: Successful login with valid credentials
    Given the user is on the landing page and follows the prompt
    When the user enters the correct credentials
    Then the user should be directed to the shop page
    # And a welcome message should be displayed

#   Scenario: Unsuccessful login with invalid credentials
#     Given the user is on the login page
#     When the user enters invalid credentials
#     And clicks on the login button
#     Then an error message should be displayed

#   Scenario: Password reset functionality
#     Given the user is on the login page
#     And the user clicks on the "Forgot Password" link
#     When the user enters their registered email
#     And clicks on the reset password button
#     Then a password reset email should be sent
