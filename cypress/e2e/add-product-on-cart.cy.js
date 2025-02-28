import Cart from '../pages/Cart'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Survey from '../pages/Survey'

describe('Adicionar produto ao carrinho', () => {

    // Poderia estar em fixtures para massa de dados, porém, como é apenas um dado, fica melhor a visualização no próprio test.
    const product = {
        title: 'AI Engineering: Building Applications with Foundation Models',
        edition: 'Inglês',
        author: 'Chip Huyen',
        status: 'Novo'
    }

    context(`Adicionar o produto ${product.title} ao carrinho de compras`, () => {

        beforeEach(() => {
            Home.go()
        })

        it('deve localizar a edição correta do livro e author', () => {
            //Realiza pesquisa do produto na Home
            Home.search(product.title)
            Home.applySearch()

            //Encontra o livro correto nos resultados e abre os detalhes
            Survey.surveyResult(product.title, product.edition, product.author)
        })

        it('deve verificar que o livro é novo', () => {
            //Realiza pesquisa do produto na Home
            Home.search(product.title)
            Home.applySearch()

            //Encontra o livro correto nos resultados e abre os detalhes
            Survey.surveyResult(product.title, product.edition, product.author)
            Survey.openDetails(product.title)

            //Valida que abriu os detalhes do livro correto, que é um livro novo e adiciona ao carrinho
            ProductDetails.titleIsVisible(product.title)
            ProductDetails.bookEdition(product.edition)
            ProductDetails.author(product.author)
            ProductDetails.openMoreOptions()
            ProductDetails.seeOptions(product.title, product.status)
        })

        it('deve adicionar o produto ao corrinho e exibir a mensagem: Adicionado ao carrinho', () => {
            //Realiza pesquisa do produto na Home
            Home.search(product.title)
            Home.applySearch()

            //Encontra o livro correto nos resultados e abre os detalhes
            Survey.surveyResult(product.title, product.edition, product.author)
            Survey.openDetails(product.title)

            //Valida que abriu os detalhes do livro correto, que é um livro novo e adiciona ao carrinho
            ProductDetails.titleIsVisible(product.title)
            ProductDetails.bookEdition(product.edition)
            ProductDetails.author(product.author)
            ProductDetails.openMoreOptions()
            ProductDetails.seeOptions(product.title, product.status)
            ProductDetails.closeOptions()
            ProductDetails.addCart()

            // Valida que o produto correto foi adicionado ao carrinho
            Cart.validateProductOnCart(product.title)
        })

    })

})