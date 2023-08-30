const el  = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){        
        cy.get('input[data-test="email"]').type('llklll@llll.com');
        cy.get('input[data-test="fullName"]').type('Llkll lllll');
        cy.get('input[data-test="registerUserName"]').type('lllklll');
        cy.get('input[data-test="registerPassword"]').type('lkklllllLll');        
    }
    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();


