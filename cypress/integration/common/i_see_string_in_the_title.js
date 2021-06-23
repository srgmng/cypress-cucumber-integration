import { Then } from "cypress-cucumber-preprocessor/steps";

// This is a good place to put global before/beforeEach/after/afterEach hooks.

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})