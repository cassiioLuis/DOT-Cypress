

class ProductDetails {

    titleIsVisible(title) {
        cy.get('#productTitle').should('contain.text', title)
    }

    bookEdition(edition) {
        cy.get('#bylineInfo').should('contain.text', edition)
    }

    author(author) {
        cy.get('.author').should('contain.text', author)
    }

    openMoreOptions() {
        cy.get('.a-icon-popover').first().click()
        cy.get('#mm-grid-aod-popover-paperback_meta_binding-entry').click()
        cy.get('#all-offers-display').should('be.visible')
    }

    seeOptions(title, status) {
        cy.get('#aod-asin-title-text').should('contain.text', title)
            .parents('#pinned-de-id')
            .find('#aod-offer-heading')
            .should('contain.text', status)
    }

    closeOptions() {
        cy.get('#aod-close').click()
        cy.get('#all-offers-display').should('have.css', 'display', 'none')
    }

    addCart() {
        cy.get('#add-to-cart-button').click()
    }
}

export default new ProductDetails()