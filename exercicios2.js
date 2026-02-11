1. O que é o Node.js? Explique sua finalidade e por que ele é considerado um ambiente de execução e não uma linguagem de programação.
é um ambiente de execução (runtime environment) de código aberto, de plataforma cruzada, que permite aos desenvolvedores executar código JavaScript fora de um navegador web
2. Qual a diferença entre Node.js e JavaScript executado no navegador? Cite pelo menos duas diferenças.
Node.js e o JavaScript executado no navegador (browser) são, na verdade, a mesma linguagem de programação baseada na engine V8 (no caso do Chrome/Node), mas funcionam em ambientes muito diferentes. 
3. O que é o V8 Engine e qual sua importância para o funcionamento do Node.js?
O V8 Engine é um motor de JavaScript de alto desempenho, de código aberto e escrito em C++ pelo Google, utilizado no Chrome e no Node.js para compilar JavaScript diretamente em código de máquina nativo. Sua importância para o Node.js reside em fornecer velocidade, eficiência de memória e a capacidade de executar JavaScript fora do navegador, impulsionando aplicações server-side rápidas e escaláveis. 
4. Explique o conceito de I/O não bloqueante no Node.js. Por que isso melhora o desempenho de aplicações?
é um modelo de execução onde operações demoradas — como leitura de arquivos, consultas ao banco de dados ou requisições de rede — não travam o fluxo principal de execução da aplicação
5. O que é o Event Loop? Descreva, de forma resumida, como ele funciona.
O Event Loop é o mecanismo central que permite ao JavaScript realizar operações assíncronas e não bloqueantes, apesar de ser uma linguagem single-threaded (executar uma coisa de cada vez) [1, 2]. 
6. O que são módulos no Node.js? Explique a diferença entre:
bibliotecas ou pedaços de código reutilizáveis, encapsulados em arquivos, que organizam e estendem as funcionalidades de uma aplicação
Módulos internos
Módulos externos
Módulos criados pelo desenvolvedor
7. Para que serve o arquivo package.json em um projeto Node.js? Cite pelo menos três informações que ele pode conter.
Ele funciona como o manifesto do projeto, contendo metadados, configurações de ferramentas e gerenciando as dependências (bibliotecas externas) que a aplicação utiliza. 
8. O que é o npm? Explique sua função no desenvolvimento de aplicações Node.js.
é o gerenciador de pacotes padrão para o ambiente de execução Node.js e o maior repositório de bibliotecas de código aberto do mundo.
9. O que é uma API REST e como o Node.js pode ser usado para desenvolvê-la?
é um conjunto de regras arquiteturais baseadas no protocolo HTTP que permite a troca de dados (geralmente JSON) entre sistemas, utilizando métodos como GET, POST, PUT e DELETE
10. Cite duas vantagens e duas desvantagens do uso do Node.js em aplicações web.
O Node.js é amplamente utilizado no desenvolvimento web devido à sua eficiência e uso de JavaScript no back-end. Abaixo estão duas vantagens e duas desvantagens principais: 
