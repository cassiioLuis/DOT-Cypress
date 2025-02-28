

class Survey {

    surveyResult(title, edition, author) {
        cy.contains('div[data-cy="title-recipe"] h2', title).should('be.visible') //sempre validamos o título do produto nos resultados

        if(edition) cy.contains('div[data-cy="title-recipe"] div span', edition).should('be.visible') //validação de edição somente em casos pontuais, por isso são opcionais
        if(author) cy.contains('div[data-cy="title-recipe"] div span', author).should('be.visible') //validação de author somente em casos pontuais, por isso são opcionais
    }

    openDetails(title) {    
        cy.contains('div[data-cy="title-recipe"] h2', title).click()
    }

}

export default new Survey()