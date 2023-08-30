describe('Página de Login', () => { 

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home');

    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 400          
    }).as('stubPost')
  });

    it('Verificar mensagem de campos obrigatórios', () => {            
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');

    });
    
    it('Deve falhar mesmo com os campos preenchidos corretamente', () => {            
      cy.login('gabrielo', 'gabriel123')
      cy.wait('@stubPost')
    });

})


