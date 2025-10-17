describe("Login - hatalı durumlar", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Yanlış email → 1 hata ve buton disabled", () => {
    cy.get("#email").type("emir-at-test.com");
    cy.get("#password").type("Abcd1234");
    cy.get("#accepted").check();

    cy.get('[role="alert"]').should("have.length", 1);
    cy.contains("Geçerli bir email giriniz").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });
});
