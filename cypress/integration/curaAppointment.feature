Feature: Make an appointment

   User should be able to make an appointment
Scenario: Verify user should be able to redirect to login page
    Given I should be in main page.
    When I click Make Appointment button.
    Then I should redirect to login page.
    
Scenario: Verify user should be able to login successfully
    Given I should be in main page.
    When I click Make Appointment button.
    And I enter username "John Doe"
    And I enter password "ThisIsNotAPassword"
    And I click login button.
    Then I should see title "Make Appointment".


Scenario: Verify user should be able to make appointment
    Given I should be in main page.
    When I click Make Appointment button.
    And I enter username "John Doe"
    And I enter password "ThisIsNotAPassword"
    And I click login button.
    And I select Facility as "Tokyo CURA Healthcare Center"
    And I select Healthcare Program as "Medicaid"
    And I select Visit Date as "30/09/2021"
    And I add Comment as "User appointment will be on 30/09/2021"
    And I click Book Appointment.
    Then I should see "User" in title.
