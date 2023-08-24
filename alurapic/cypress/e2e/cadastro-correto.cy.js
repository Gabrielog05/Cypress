describe('Página de Cadastro', () => { //nome do cenário de teste
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {// Informa o caso de teste a realizar
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('gabriel@gmail.com.br')
    cy.get('[data-test="fullName"]').type('Gabriel Oliveira')
    cy.get('[data-test="registerUserName"]').type('gabrielo')
    cy.get('[data-test="registerPassword"]').type('gabriel123')
    cy.contains('button', 'Register').click()
  });
})