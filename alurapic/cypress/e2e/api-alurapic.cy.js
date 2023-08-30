describe('Api Alurapic', () => {    
     it('Dados da Api', () => {
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')//verifica se o corpo(body) da resposta possui ID
            expect(res.body.id).to.be.equal(3)//res.body.id acessa o id do corpo(body) da resposta
        })
    });

    it('Fotos do usuário', () => {
        const tempoEsperado = Math.random() * 50;

        cy.request({
            method: 'GET',
            url:'http://localhost:3000/gabrielo/photos',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('') //Valida se o cmapo de descrição da imagem contém a string vazia
            expect(res.duration).to.be.lte(tempoEsperado) //Verifica o tempo de requisição dentro de um intervalo de tempo.
        })
    });
})

 