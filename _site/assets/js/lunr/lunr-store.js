var store = [{
        "title": "Como instalar Ruby no seu computador",
        "excerpt":"Heey! Como vai!? Bem, como já sabemos todo ambiente de desenvolvimento precisa ser preparado de acordo com o sistema em que será desenvolvido. Eu uso o FEDORA 24, uma distribuição dos sistemas Linux e vou trazer neste post os passos/comandos que utilizei para preparação do meu ambiente Ruby e algumas breves...","categories": ["ruby"],
        "tags": ["configuração","instalacao","linux","windows"],
        "url": "/ruby/como-instalar-ruby/",
        "teaser": null
      },{
        "title": "Como usar each, select e map para percorrer vetores no Ruby",
        "excerpt":"Hey, como vai?! Hoje vamos continuar falando da parte de leitura dos dados de um array. Além do acesso por meio de índice, é possível iterar por todos os elementos do array, isso é percorrer o vetor acessando todas as suas posições. Existem vários métodos no Ruby que nos ajudam nessa...","categories": ["ruby"],
        "tags": ["array","collect","each","iterar","map"],
        "url": "/ruby/each-select-map-vetor/",
        "teaser": null
      },{
        "title": "Como ordenar array (vetor) em Ruby",
        "excerpt":"Hey, como vai?! Bem, hoje quero falar de métodos de ordenação, mas nada complicado demais, OK?! O Ruby tem em si um método embutido, chamado sort, podendo ser in place (no mesmo objeto) ou não. Este, por padrão, ordena de forma crescente: Mas também aceita, como parâmetro, a maneira que...","categories": ["ruby"],
        "tags": ["vetor","ordenar","sort","array"],
        "url": "/ruby/ordenando-arrays-em-ruby/",
        "teaser": null
      },{
        "title": "Classes em Ruby 101: como acessar atributos com `get` e `set`",
        "excerpt":"Hey, como vai?! Hoje vamos falar um pouco dos famosos getters e setters e como fazemos eles do zero usando puro Ruby, shall we? Para fazermos o que precisamos hoje, vamos usar uma classe de animais, com um initialize básico: class Animal def initialize puts \"Criando um novo animal\" end...","categories": ["Ruby"],
        "tags": ["get","set","getter","setter"],
        "url": "/2017/04/26/classes-101-getters-e-setters/",
        "teaser": null
      },{
        "title": "Classes em Ruby 101: Atributos Attr Reader, Writer, Accessor",
        "excerpt":"Hey, como vai?! Esse post vou te ensinar a como definir get e set no Ruby usando a família attr. Confuso? Que nada, vem comigo! Bem, agora que já sabemos como fazer os métodos get e set do zero, por que não usamos as ferramentas que o Ruby tem? O...","categories": ["ruby"],
        "tags": ["atributo","attr","reader","accessor","attr_writer","attr_accessor","attr_reader"],
        "url": "/ruby/classes-101-familia-attr/",
        "teaser": null
      },{
        "title": "Como declarar constante ou variável local e/ou global em Ruby",
        "excerpt":"Hey, como vai?! Olha, você sabia que em Ruby, os primeiros caracteres do nome de uma variável ditam qual a função dela? Do quê ela trata? Eu não sabia, e decidi trazer essa informação a você (e mais algumas coisinhas)! Declarando variáveis Pois bem, para variáveis locais, parâmetros e nome...","categories": ["ruby"],
        "tags": ["constante","global","local","variaveis","variável"],
        "url": "/ruby/variavel-local-global-constante/",
        "teaser": null
      },{
        "title": "Qual a diferença entre `p`, `puts` e `print`? #funTip",
        "excerpt":"Você alguma vez já se perguntou: Qual a diferença entre o p, o puts e o print no Ruby? Não se preocupe, eu vou te contar! Pois bem, aqui vai a sua resposta: Enquanto o puts é apresenta uma linha “formatata” seguida de um \\n, o p mostra em sua...","categories": ["ruby"],
        "tags": ["inspect","p","print","puts","funTip"],
        "url": "/ruby/p-puts-print-inspect/",
        "teaser": null
      },{
        "title": "Tudo o que você precisa saber sobre loops e iteradores em Ruby!",
        "excerpt":"Oi, tudo bem com você? Hoje falarei sobre como podemos percorer objetos e escrever loops em Ruby, vamos lá? Read the ENGLISH VERSION. Diferença entre Loops e Iteradores Antes de mais nada, é importante que você entenda a diferença entre Loops e Iteradores. Ainda que os dois pareçam coisas iguais,...","categories": ["ruby"],
        "tags": ["down","for","loop","step","times","to","up"],
        "url": "/ruby/loops-iteradores/",
        "teaser": null
      },{
        "title": "Qual a diferença entre `sprintf`, `format` e `printf` ? #funTip",
        "excerpt":"Hoje vou te explicar a diferença entre printf, sprintf e format. Simbora? Format e Sprintf Pois bem, o que a documentação do Ruby - um dos amores da minha vida - fala é o seguinte: Ou seja, o que o método faz é retorna uma nova string formatada segundo os...","categories": ["ruby"],
        "tags": ["funtip","format","printf","sprintf","string"],
        "url": "/ruby/sprintf-format-printf/",
        "teaser": null
      },{
        "title": "Qual a diferença entre `each.with_index` e `each_with_index` ? #funTip",
        "excerpt":"Já se perguntou qual a diferença entre each.with_index e each_with_index, esse post vem para te ajudar a responder essa pergunta! O Ruby apresenta duas formas de iterarmos sobre objetos quando queremos acesso aos seus índices: o each_with_index o each.with_index Mas qual a diferença entre os dois? Pois bem, a grande...","categories": ["ruby"],
        "tags": ["each","index","with","funtip"],
        "url": "/ruby/each-with-index/",
        "teaser": null
      },{
        "title": "Como criar vetores usando \"range\" em Ruby #funTip",
        "excerpt":"Quantas vezes programando você se deparou com a necessidade de criar um array populado com vários números? Bem, isso sempre acontece comigo! E o Ruby, muito legal que é, soluciona isso rapidamente com os Ranges: arr = Array(1..5) p arr Saída: [1, 2, 3, 4, 5] Viu como é que...","categories": ["ruby"],
        "tags": ["array","funTip","new","ranges"],
        "url": "/ruby/popular-vetor-range/",
        "teaser": null
      },{
        "title": "Ruby Blocks: O que são e como usar?",
        "excerpt":"Bem, o que são os blocos? Eles não são objetos ... Programming Ruby 1.9 &amp; 2.0 fala: um bloco de código é um conjunto de declarações e expressões, que pode estar entre chaves {} ou do/end keywords. No Ruby, é comum vermos blocos em todo lugar, e aqui no blog...","categories": ["ruby"],
        "tags": ["block","blocks","yield"],
        "url": "/ruby/blocks-em-ruby/",
        "teaser": null
      },{
        "title": "Tudo sobre herança e seus conceitos em Ruby!",
        "excerpt":"Hoje vamos falar de herança. O conceito de herança se aplica quando nos perguntamos se um objeto é um subtipo de outro, ou seja, um cachorro é um animal, mas um animal não é necessariamente um cachorro certo? Em Ruby, tais conceitos não mudaram. Quando queremos explicitar uma relação de...","categories": ["ruby"],
        "tags": ["child","filho","herança","mãe","pai","parent","superclasse"],
        "url": "/ruby/heran%C3%A7a-objetos-classe/",
        "teaser": null
      },{
        "title": "Interactive Ruby Shell (IRB)",
        "excerpt":"Oi, turobom? Hoje quero falar sobre o IRB, sigla para Interactive Ruby Shell. O irb é um programa que pertence a categoria REPL (Read–eval–print loop), onde os códigos são lidos, interpretados/executados e o resultado dos mesmos é retornado interativamente. Mas, \"como assim?\" você pergunta, te mostro nos GIFs abaixo. Adicão...","categories": ["ruby"],
        "tags": ["irb","pry","repl","shell","terminal"],
        "url": "/ruby/irb/",
        "teaser": null
      },{
        "title": "Ruby Proc: O que é e como usar?",
        "excerpt":"Oi, como vai? Hoje falarei sobre as procs, também conhecidas como procedures do Ruby. O que é uma Proc? Estando intimamente ligadas com os blocks, as procs são a transformação de um bloco em um objeto. Ou seja, as procedures são nada mais, nada menos que aquilo que o seu...","categories": ["ruby"],
        "tags": ["block","bloco","do","end","lambda","proc","procedure"],
        "url": "/ruby/procedures-proc-ruby/",
        "teaser": null
      }]
