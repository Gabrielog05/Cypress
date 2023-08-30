describe('Página de Cadastro', () => { //Nome do cenário de teste
    it('Preencher os campos do formulário incorretamente', () => {// Nome do caso de teste
      cy.visit('http://localhost:4200/#/home');
      cy.contains('a', 'Register now').click();      
      cy.contains('button', 'Register').click();
      cy.contains('button', 'Register').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })
  
