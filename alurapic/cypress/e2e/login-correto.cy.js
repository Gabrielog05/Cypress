
describe('Página de Login', () => { 

  beforeEach(() =>{
    cy.visit('http://localhost:4200/#/home')
  });

    it('Preencher os campos de login e senha corretamente para acessar o sistema', () => {
      cy.login('gabrielo', "gabriel123")
    
    });
  })

