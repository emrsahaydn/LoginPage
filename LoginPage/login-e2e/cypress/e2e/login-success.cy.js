describe("Login başarılı akış",()=>{
    it("geçerli bilgilerle succsess sayfasına yönlendirilir",()=>{
        cy.visit("/login");
         cy.wait(3000);

        cy.get("#email").type("emir@test.com");
        cy.get("#password").type("Password1");
        cy.get("#accepted").check();

        cy.get('button[type="submit"]').should("not.be.disabled").click();
        cy.get('button[type="submit"]').click();

        cy.location("pathname").should("eq","/success");
        cy.contains("Giriş Başarılı").should("be.visible");

    })
})