import VCounter from "../index.vue";

describe("<VCounter />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(VCounter);
    cy.get("[data-cy=counter]").should("have.text", "Times clicked: 0");
  });

  it("when the increment button is pressed, the counter is incremented", () => {
    cy.mount(VCounter);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "Times clicked: 1");
  });

  it("when the decrement button is pressed, the counter is decremented", () => {
    cy.mount(VCounter);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "Times clicked: -1");
  });
});
