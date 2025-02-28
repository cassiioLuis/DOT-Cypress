

class Home {

    go() {
        cy.exemplo('/')
        cy.url().should('eq', 'https://www.amazon.com.br/')
    }

    search(text) {
        cy.get('input[id=twotabsearchtextbox]').type(text)
    }

    applySearch() {
        cy.get('#nav-search-submit-button').click()
    }

}

export default new Home()