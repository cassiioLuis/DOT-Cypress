


class Cart {

    validateProductOnCart(title) {
        cy.get('img[alt="AI Engineering: Building Applications with Foundation Models"]').should('be.visible')
        cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').should('contain.text', 'Adicionado ao carrinho')
    }

}

export default new Cart()