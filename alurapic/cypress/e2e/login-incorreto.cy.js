describe('Página de Login', () => { //Nome do cenário de teste
    it('Verificar mensagem de campos obrigatórios', () => {// Nome do caso de teste
      cy.visit('http://localhost:4200/#/home');          
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })