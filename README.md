# Bored Button

[![Website](https://img.shields.io/website?up_message=online&down_message=offline&url=https%3A%2F%2Fenzo-santos.github.io%2Fbored-button%2F)](https://enzo-santos.github.io/bored-button/)

Este projeto foi inspirado por [Bored? Press the Bored Button!](https://www.boredbutton.com/).

## Uso

Para desenvolvimento, é necessário ter o [Gradle](https://gradle.org/install/) instalado.

Execute os seguintes comandos no terminal:

```shell
git clone https://github.com/enzo-santos/bored-button
cd bored-button
```

Para executar no localhost, execute

```shell
gradle run
```

Para gerar o HTML do site no diretório *build/distributions*, execute

```shell
gradle build
```

## Implementação

Os jogos implementados até agora foram

- resolvedor de Sudoku: insira um tabuleiro de Sudoku incompleto e uma solução será exibida 
- [Wordle](https://www.nytimes.com/games/wordle/index.html) (ou [Termo](https://term.ooo/), em português): encontre uma palavra de cinco letras em seis tentativas
- 2048: tente formar o maior múltiplo de 2 possível movendo as peças de um tabuleiro 4x4 com as setas

Mais jogos haverão de ser implementados.

A linguagem utilizada é Kotlin/JS, com suporte a React. 

O layout não está muito responsivo para *mobile*, então a melhor experiência está na *web* por enquanto.

## Telas

Algumas das telas implementadas seguem abaixo. Para alternar entre os jogos, basta pressionar o botão vermelho.

### Sudoku Solver

![localhost_8080_(Nest Hub)](https://github.com/enzo-santos/bored-button/assets/22715629/6b097d92-a23f-47c3-bcbb-7e22f252e760)
![localhost_8080_(Nest Hub) (1)](https://github.com/enzo-santos/bored-button/assets/22715629/8e1dafc2-6728-4e1e-ba67-40f3934fc2ad)
![localhost_8080_(Nest Hub) (2)](https://github.com/enzo-santos/bored-button/assets/22715629/13fce67d-8f9f-4b97-8c5d-ddaf44b7266b)

### Wordle

![localhost_8080_(Nest Hub) (3)](https://github.com/enzo-santos/bored-button/assets/22715629/8d80c439-0815-40e7-b69a-bb49de53263c)
![localhost_8080_(Nest Hub) (4)](https://github.com/enzo-santos/bored-button/assets/22715629/3e11ed96-b32e-4d17-b684-8aff19c9d977)

### 2048

![localhost_8080_(Nest Hub) (5)](https://github.com/enzo-santos/bored-button/assets/22715629/9770ed36-e6ae-4a3d-9036-74a9c8cdbff4)
![localhost_8080_(Nest Hub) (6)](https://github.com/enzo-santos/bored-button/assets/22715629/061bb20d-951c-4ea2-854b-ae5f45b0522f)

