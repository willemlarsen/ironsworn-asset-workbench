/// <reference types="Cypress" />

describe("the 'Top' editor screen", () => {
  it("can get to the Top editor screen", () => {
    cy.visit("http://localhost:3000");
    cy.get(".add-new-asset").click();
    cy.get("#show-top-view").should("have.class", "selected");
  });

  it("can set the asset name", () => {
    cy.get("#asset-name-input").clear().type("Super Strength");
    cy.get(".asset-name").should("have.text", "Super Strength");
  });

  it("can set the asset type", () => {
    cy.get("#asset-type-input").clear().type("path");
    cy.get(".type").should("have.text", "path");
  });

  it("can set a write-in", () => {
    cy.get("#asset-write-in-input").type("Name");
    cy.get(".write-in").should("have.text", "Name");
  });

  it("can set a second write-in", () => {
    cy.get("#asset-second-write-in-input").type("Stat");
    cy.get(".write-in").eq(1).should("have.text", "Stat");
  });

  it("can totally remove a write-in", () => {
    cy.get("#asset-write-in-input").clear();
    cy.get("#asset-second-write-in-input").clear();
    cy.get(".details").children().should("not.have.class", "write-in");
  });

  it("can add a description", () => {
    cy.get(".asset-description-input").type("You have the strength of an ox.");
    cy.get(".description").should(
      "have.text",
      "You have the strength of an ox."
    );
  });

  it("can remove the description", () => {
    cy.get(".asset-description-input").clear();
    cy.get(".details").children().should("not.have.class", "description");
  });
});
