import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de Cadastro', () => { //nome do cenário de teste
  
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {// Informa o caso de teste a realizar    
      
      Cadastro.acessarPaginaDeCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro();
    
    });
})

