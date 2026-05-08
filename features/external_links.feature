Feature: Do all the external links function as expected?
    A user needs to be able to navigate to any external link provided on the site.

  Scenario: Verify each external link can be accessed.
    Given I'm on the portfolio home page
    When the user clicks "<link>"
    Then the user is redirected with the "<link>" set as the URL

    Examples:
      | link                                         |
      | https://world-map-tsmith-netlify.app/map     |
      | https://capstone-frontend-4y9n.onrender.com/ |
      | https://www.linkedin.com/in/tristin-h-smith/ |
