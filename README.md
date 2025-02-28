# 🚀 Projeto automação e2e com Cypress 🚀

<a name="sobre"></a>

## Sobre

Projeto de automação e2e com Cypress <br><br>

Projeto simples, com apenas um cenário e seguindo uma estrutra básica. <br>

Devido a falta de complexidade, não foi necessário o uso de custom commands ou variáveis globais com Cypress.env <br>

<br>

# Tabela de Conteudo

<!--ts-->

- [Sobre](#Sobre)
- [Tabela de Conteudo](#tabela-de-conteudo)
- [Pre Requisitos](#pre-requisitos)
- [Executando os Testes via interface do cypress](#executando-os-testes-via-interface-do-cypress)
- [Executando os Testes em modo headless](#executando-os-testes-em-modo-headless)
- [Construido com](#construido-com)
<!--te-->

<br>
<a name="pre-requisitos"></a>

### Pre Requisitos

1.  Ter instalado o git.
    > Note: Pode ser baixado a partir do link abaixo: <i>https://git-scm.com/downloads</i>

<br>

2.  Ter instalado o node.js

    > Note: Pode ser baixado a partir do link abaixo: <i>https://nodejs.org/en/</i>

    > Note: Também é necessário o NPM, mas este gerenciador de pacotes vem junto na instalação do node.js</i>

<br>

3.  Realizar o clone do projeto através do comando:
    > <i>git clone https://github.com/cassiioLuis/DOT-Cypress.git</i>

<br>

4.  Acessar a pasta QA-UI-Cypress

<br>

5.  Acessar o terminal e executar o seguinte comando:
    > <i>yarn install</i>

<br>
<a name="executando-testes-interface-do-cypress"></a>

### Executando os Testes via interface do cypress

1. Para abrir a interface do cypress, executar o seguinte comando no terminal:
   > <i>yarn cy:open</i>

<br>

2. Após o passo anterior, clicar sobre o arquivo que deseja executar os testes

<br>
<a name="executando-testes-em-modo-headless"></a>

### Executando os Testes em modo headless

1. Para executar os testes em modo headless (sem interface gráfica), executar o seguinte comando no terminal:
   > <i>yarn cy:run</i>

<br>
<a name="construido-com"></a>

### Construido com

- [Cypress] - Framework utilizado para automação de testes end-to-end

- [Javascript] - Linguagem de programação utilizada para o desenvolvimento dos testes automatizados

[cypress]: https://www.cypress.io/
[javascript]: https://www.javascript.com/
