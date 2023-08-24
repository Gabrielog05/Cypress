Cypress.Commands.add('logando', (nome, senha) => {
    cy.get('[data-test="loginUserName"]').type(nome)
    cy.get('[data-test="loginPassword"]').type(senha)
    cy.contains('button', 'login').click()    
})

