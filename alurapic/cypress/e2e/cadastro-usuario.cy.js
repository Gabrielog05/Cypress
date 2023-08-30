// Valida se as mensagens de campos obrigatórios estão sendo exibidas caso algum campo esteja vazio.

describe('Página de Cadastro', () => { 
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('gabriel@gmail.com.br')
    cy.get('[data-test="fullName"]').type('Gabriel Oliveira')
    cy.get('[data-test="registerUserName"]').type('gabrielo')
    cy.get('[data-test="registerPassword"]').type('gabriel123')
    cy.contains('button', 'Register').click()
  });

  it('Não preencher os campos do formulário de cadastro e registrar e registrar', () => {      
      cy.visit('http://localhost:4200/#/home');
      cy.contains('a', 'Register now').click();      
      cy.contains('button', 'Register').click();
      cy.contains('button', 'Register').click();
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })

  it('Preencher apenas o campo de email do formulário e registrar', () => {
    cy.visit('http://localhost:4200/#/home/signup');          
    cy.get('[data-test="email"]').type('gabriel@gmail.com.br')
    cy.contains('button', 'Register').click();
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Preencher apenas o campo de fullname do formulário e registrar', () => {
    cy.visit('http://localhost:4200/#/home/signup');     
    cy.get('[data-test="fullName"]').type('Gabriel Oliveira');
    cy.contains('button', 'Register').click();
    cy.contains('Email is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Preencher apenas o campo de user name do formulário e registrar', () => {
    cy.visit('http://localhost:4200/#/home/signup');     
    cy.get('[data-test="registerUserName"]').type('gabrielo');    
    cy.contains('button', 'Register').click();
    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Preencher apenas o campo de password do formulário', () => {
    cy.visit('http://localhost:4200/#/home/signup');     
    cy.get('[data-test="registerPassword"]').type('gabriel123');
    cy.contains('button', 'Register').click();
    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');    
    cy.contains('User name is required!').should('be.visible');
  })
})
  
