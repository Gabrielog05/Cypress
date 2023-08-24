describe('Página de Login', () => { //Nome do cenário de teste
  
  beforeEach(() =>{
    cy.visit('http://localhost:4200/#/home')
  });

    it('Preencher os campos de login e senha corretamente para acessar o sistema', () => {// Nome do caso de teste
      cy.logando('gabrielo', "gabriel123")      
    
    });
  })