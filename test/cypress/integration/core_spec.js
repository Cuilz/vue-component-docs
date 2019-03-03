describe('Styleguidist core', () => {
	beforeEach(() => cy.visit('/'));

	it('loads the page', () => {
		cy.title().should('include', 'Vue Styleguidist');
	});

	it('shows multiple components in normal mode', () => {
		cy.get('[id$=container]').should('have.length.above', 1);
	});

	it('shows single component in isolated mode', () => {
		cy.get('[title="Open isolated"]')
			.first()
			.click();
		cy.get('[id$=container]').should('have.length', 1);
	});
});
