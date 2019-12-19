context('Testing weather.com', () => {
    beforeEach(() => {
        cy.visit('https://weather.com')
    });

    it('A user can switch temperature units', () => {
        cy.get('span.styles__borderLeft__2zhrE').contains('°C').click();
        cy.get('button.styles__unitButton__3O3Sn').contains('°F').click();
        cy.get('span.styles__borderLeft__2zhrE').contains('°F').click();
        cy.get('button.styles__unitButton__3O3Sn').contains('°C').click();
    });

    it('A user can switch language', () => {
        cy.get('span.styles__menuButton__3KeBe').click();
        cy.get('.styles__categoryItem__1nSVC').contains('Европа').click();
        cy.get('.styles__countryNavItem__1nIS3').contains('Германия').click();
        cy.get('span.input__hint__1-HWJ').contains('Das Wetter in ...');
    });

    it('A user can choose city for checking weather', () => {
        cy.get('input[aria-label="Location Search"]').type('Витебск');
        cy.contains('Витебск, Витебская область').click();
        cy.get('a[data-from-string="localsuiteNav_5_Weekend"]').click();
    });

});