Feature: Login into Healthcare Application

    Scenario: Login with valid Credentials
        Given user is on Landing Page
        When user enters valid username and valid password
        Then user is logged into the Application