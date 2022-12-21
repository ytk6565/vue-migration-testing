import VCounter from "../index.vue";

describe("<VCounter />", () => {
  it("renders", () => {
    // TODO: 型エラーを修正する
    // @ts-ignore
    cy.mount(VCounter);
    cy.get("[data-cy=counter]").should("have.text", "Times clicked: 0");
  });

  it("when the increment button is pressed, the counter is incremented", () => {
    // @ts-ignore
    cy.mount(VCounter);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "Times clicked: 1");
  });

  it("when the decrement button is pressed, the counter is decremented", () => {
    // @ts-ignore
    cy.mount(VCounter);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "Times clicked: -1");
  });
});
