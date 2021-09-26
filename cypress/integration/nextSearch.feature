Feature:Search Feature

I want search for specific product by name
Scenario: Verify User should be Successfully Search the product by name.
 Given I navigate to home page.
 When I enter product name "Boys Trainers" in Search text Field.
 And I click Search Icon
 Then user should be able to see "Boys Trainers" in title.
 And user should see all relevant products listed.
