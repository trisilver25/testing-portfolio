Feature: Does the navigation bar function as expected?
    The Websites navigation needs to function for users to efficiently navigate and explore the portfolio.

  Scenario: Verify navigation buttons navigate the user to the proper section
    Given I'm on the portfolio home page
    When the user clicks "<button>"
    Then the "<section>" heading is displayed at the top of the viewport

    Examples:
      | button   | section               |
      | About    | About Me              |
      | Skills   | My Skills             |
      | Projects | Featured Projects     |
      | Contact  | Get In Touch          |
      | Home     | Hi, I'm Tristin Smith |
