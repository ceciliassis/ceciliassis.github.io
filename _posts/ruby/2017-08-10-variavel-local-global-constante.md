---
title: Como declarar constante ou variável local e/ou global em Ruby
date: 2017-08-10 16:54:43.000000000 -03:00
categories:
  - ruby
tags:
  - constante
  - global
  - local
  - variaveis
  - variável
meta:
  _wpcom_is_markdown: '1'
  _rest_api_published: '1'
  _wp_old_slug: varieveis-e-seus-muitos-nomes
  _thumbnail_id: '2004'
  _publicize_done_external: a:2:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/895735197014032384";}s:8:"facebook";a:1:{i:17534513;s:38:"https://facebook.com/10155402414573280";}}
  _publicize_done_16680227: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '8138925282'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6301500889987375104&type=U&a=TULz
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/MwL2PXSRHYK
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---
<p style="text-align:center;"><em><strong>Hey, como vai?!</strong></em></p>
<p>Olha, você sabia que em Ruby, os primeiros caracteres do <strong>nome</strong> de uma variável ditam qual a
  função dela? Do quê ela trata?<br />
  Eu não sabia, e decidi trazer essa informação a você (e mais algumas coisinhas)!</p>

<h2> Declarando variáveis </h2>

Pois bem, para variáveis <em>locais</em>, <em>parâmetros</em> e <em>nome de métodos</em> usamos: letra minúscula ou
  underscore (<span style="color:#ff6600;"><code> _ </code></span>), sendo o *underscore* mais indicado para <a
    href="https://github.com/ceciliassis/ruby-style-guide#trailing-underscore-variables">informar uma variável que não será utilizada</a>.

Já as variáveis <em>globais</em> devem começar com <strong>cifrão</strong> (<span style="color:#ff6600;"><code>$</code></span>), ex: <span style="color:#ff6600;"><code>$ENV</code></span>.

Variáveis de <em>instância</em>, isto é, aquelas declaradas dentro de classe de um objeto, começam com <strong>arroba</strong> (<span style="color:#ff6600;"><code>@</code></span>), ex: <span style="color:#ff6600;"><code>@nome</code></span>.

Variáveis da <em>classe</em> começam com dois <strong>arrobas</strong> (<span style="color:#ff6600;"><code>@@</code></span>), ex: <span style="color:#ff6600;"><code>@@config</code></span>.

Levando isso em conta, após caracteres "especiais", você pode usar números ou o que der na telha.

<h2> Declarando constantes </h2>
Como nem tudo são flores, o funcionamento das constantes no Ruby é um pouco diferente do que em outras linguagens. 

No Ruby, as constantes são declaradas com todas as letras maíusculas, ex: <span style="color:#ff6600;"><code>UMA_CONSTANTE</code></span>, convenção também praticada em outras comunidades, porém ainda que tenham o conceito de uma constante, é permitido que seus valores sejam modificados. Veja só:


```ruby
  NORTH = 'north'
  NORTH = 'east'
```

<p>Você perceberá que: mesmo com um erro lançado, o valor da variável é alterado. Isso ocorre porque o Ruby trabalha com
  objetos, <a href=""> se lembra</a>, fazendo com que a cada atribuição uma nova referência seja atrelada à variável.</p>

<p>Uma alterativa seria congelar o objeto ...</p>

```ruby
  NORTH = 'north'.freeze
  # ou
  NORTH.freeze
```

<p>... no entanto, o quê o método <span style="color:#ff6600;"><code>freeze</code></span> faz é congelar o objeto referênciado ...</p>

```ruby
  NORTH = 'north'.freeze
  NORTH << 'oi'
```

<p>... E não a variável em si.</p>

```ruby
  NORTH = 'north'.freeze
  NORTH = 'east'
```

<strong>Então, cuidado!!</strong>

Como dica, dê uma olhada na resposta <strong>TL;DR</strong> a questão: http://stackoverflow.com/questions/26537564/ruby-constants-seem-to-be-invisibly-alterable

<hr />
<p style="text-align:center;"><strong>Dicas - #funTip</strong></p>

Por convenção:
- Nomes de classes começam com letra maíscula e seguem o padrão <em>CamelCase</em>, <a href="https://github.com/ceciliassis/ruby-style-guide#camelcase-classes">veja</a>.
- Nomes de métodos, variáveis, diretórios e arquivos devem seguir o padrão <em>snake_case</em>, <a href="https://github.com/ceciliassis/ruby-style-guide#snake-case-files">veja</a>.</p>

Para mais dicas sobre boas práticas de programação no Ruby, acesse <a href="https://github.com/rubocop-hq/ruby-style-guide">The Ruby Style Guide</a>
<hr />
<p>Bem, creio que com isso terminamos o post de hoje! Como podemos perceber o Ruby tem falhas, como qualquer outra linguagem,
  mas não deixe isso te abalar; Ruby continua sendo uma linguagem maravilhosa!</p>

<p>Alguma dúvida ou sugestão? Deixe nos comentários!</p>
<p style="text-align:right;"><em><strong>Até mais!!</strong></em></p>
<p><img class=" size-full wp-image-2004 aligncenter" src="{{ site.baseurl }}/assets/variaveis_e_seus_muitos_nomes.png"
    alt="variaveis_e_seus_muitos_nomes" width="735" height="550" /></p>