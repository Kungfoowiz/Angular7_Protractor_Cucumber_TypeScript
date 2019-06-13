Feature: Go to home page

  Scenario: My home page title
    Given I am on the home page
    When I do nothing
    Then I should see the title 'Hello Cucumber'
