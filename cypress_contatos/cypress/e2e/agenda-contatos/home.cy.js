/// <reference types="cypress" />

describe('Teste de Inclusão de Contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    })

    it('deve incluir um novo contato', () => {
        cy.get('button').contains('Adicionar').click();
        cy.get('.adicionar').click();
        cy.get('[type="text"]').type('Gabriel Richard');
        cy.get('[type="email"]').type('gabrielrichard@gmail.com');
        cy.get('[type="tel"]').type('123456789');
        cy.get('form').submit();
    });

    it('deve alterar um contato existente', () => {
        cy.get('button').contains('Editar').click();
        cy.get('[type="text"]').clear().type('Gabriel');
        cy.get('[type="email"]').clear().type('gabrielrichard@yahoo.com');
        cy.get('[type="tel"]').clear().type(11985216579)
        cy.get('form').submit();
        cy.contains('Gabriel').should('be.visible');
    });

    it('deve remover um contato existente', () => {
        cy.contains('Gabriel').click();
        cy.get('button').contains('Deletar').click();
        cy.should('not.contain', 'Gabriel');
    });
});