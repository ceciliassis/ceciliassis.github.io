---
title: 'Ruby Blocks: O que são e como usar?'
date: 2018-03-05 18:00:12.000000000 -03:00
categories:
- ruby
tags:
- block
- blocks
- yield
meta:
  _wpcom_is_markdown: '1'
  _rest_api_published: '1'
  _thumbnail_id: '2221'
  _rest_api_client_id: "-1"
  _publicize_done_external: a:2:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/970792068342845440";}s:8:"facebook";a:1:{i:17534513;s:38:"https://facebook.com/10155975467218280";}}
  _publicize_job_id: '15419260439'
  timeline_notification: '1520289834'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6376557762435907584&type=U&a=y0sG
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/SGrqHgaayUC
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---
<p>Bem, o que são os blocos?<a href="http://iamvery.com/2016/03/21/ruby-blocks-are-not-a-thing.html" target="_blank">
    Eles não são objetos ...</a></p>


<p><strong><a href="https://pragprog.com/book/ruby4/programming-ruby-1-9-2-0">Programming Ruby 1.9 &amp;
      2.0</a></strong> fala: um bloco de código é um conjunto de declarações e expressões, que pode estar entre chaves
  <span style="color:#ff6600;"><code>{}</code></span> ou <span style="color:#ff6600;"><code>do/end</code></span>
  <em>keywords</em>.</p>
<p>No Ruby, é comum vermos blocos em todo lugar, e aqui no blog não foi diferente: <a
    href="{% post_url /ruby/2017-03-15-ordenando-arrays-em-ruby %}" target="_blank">Ordenando Array em
    Ruby</a>, <a href="{% post_url /ruby/2017-03-02-each-select-map-vetor %}">Vetores e vetores, parte
    3</a> ...</p>
<p>Na sua utilização eles podem receber parâmetros ou não, sendo que esses, quando definidos, devem vir entre barras
  verticais <span style="color:#ff6600;"><code>||</code></span>:</p>

```ruby
[1,2,3].each { |num| puts "#{num}" }
[1.2.3].each { puts "Oi" }
```

<hr />
<h1>Inline Blocks</h1>
<p>Esse tipo de bloco é aquele que vem entre chaves. O mesmo possui maior precedência do que o definido entre as
  palavras <span style="color:#ff6600;"><code>do</code></span> e <span style="color:#ff6600;"><code>end</code></span> e
  é favorecido para instruções de somente uma linha, daí o nome <em>inline</em>.</p>

```ruby
[1,2,3].each { |num| puts "#{num}" }
```

<hr />
<h1>Do/End Blocks</h1>
<p>Como o primeiro tipo é para instruções de somente uma linha, este é para blocos maiores e a passagem de argumentos
  ocorre à frente da keyword <span style="color:#ff6600;"><code>do</code></span>. A precedência deste tipo é menor.</p>

```ruby
sum = 0
other_array.each do |value|
  sum += value
  puts value / sum
end
```

<p><ins datetime="2017-09-03T17:14:10-03:00">Quando uma varíavel é declarada fora do bloco, e dentro dele uma com o
    mesmo nome também é, aquela de fora é sobrescrita pela variável de dentro. Fique ligadx!</ins></p>
<hr />
<h1>Yield</h1>
<p>Para finalizar, falemos do <span style="color:#ff6600;"><code>yield</code></span>, uma palavrinha que já me causou e
  às vezes ainda causa muita confusão.</p>
<p>É importante saber que no Ruby tanto os métodos quanto os blocos não são executados no momento de sua definição, mas
  sim tem os seus contextos salvos e depois relembrados.</p>
<p>Logo, quando uma linha que contém o <span style="color:#ff6600;"><code>yield</code></span> é atingida no fluxo de
  execução, o <strong>bloco</strong> antes definido é de fato realizado.</p>

```ruby
def triple
  puts 'no método'
  # o bloco vai vir aqui
  yield
  puts 'de volta ao método'
end

# o que está no bloco será executado no lugar do yield
triple { puts 'agora no bloco' }
```

<p>Saída</p>

```
no método
agora no bloco
de volta ao método
```

<p>Agora com parâmetros para uma(<em>sequência de Fibonnaci</em>):</p>

```ruby
def fib_up_to(max)
  i1, i2 = 1, 1 # atribuição paralela (i1 = 1 e i2 = 1)
  while i1 <= max
    yield i1
    i1, i2 = i2, i1+i2
    end
end </p>

fib_up_to(1000) {|f| print f, " " }
```

<p>Aqui temos duas coisas novas: o uso de parâmetros e a atribuição paralela. Vamos a primeira novidade: Na linha 9
  chamamos o método com o parâmetro <span style="color:#ff6600;"><code>1000</code></span> e definimos o bloco com uma
  variável <span style="color:#ff6600;"><code>f</code></span>. Ao ser executado, o método <span
    style="color:#ff6600;"><code>fib_up_to</code></span> primeiro executa a atribuição paralela, onde <span
    style="color:#ff6600;"><code>ì1</code></span> e <span style="color:#ff6600;"><code>i2</code></span> recebem 1. Daí
  chegamos a linha 4 onde <span style="color:#ff6600;"><code>yield</code></span> aparece, pegando o valor de <span
    style="color:#ff6600;"><code>i1</code></span> e repassando ao bloco na linha 9, aqui o <span
    style="color:#ff6600;"><code>print</code></span> é acionado, mostrando o valor atual de <span
    style="color:#ff6600;"><code>i1</code></span>. Depois disso tudo, o controle volta para linha 5, logo abaixo do
  <span style="color:#ff6600;"><code>yield</code></span>, com outra atribuição paralela.</p>
<p>A saída desse código é:</p>

```
1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
```

<p>Pode parecer confuso de primeira, acredite, eu sei! Por isso, sugiro que debugue o código e veja o seu funcionamento
  na prática. O Visual Studio tem ferramentas ótimas para isso!</p>
<hr />
<p>Bem, acho que por hoje chega, rsrs. Muita coisa foi passada e os blocos devem ser estudados!</p>
<p style="text-align:center;">E aí!? Me diga o que você acha dos blocos e me conte nos comentários como os usa!</p>
<p style="text-align:right;"><em><strong>Te espero no próximo post (:</strong></em></p>
<p><img class=" size-full wp-image-2221 aligncenter" src="{{ site.baseurl }}/assets/blocks.png" alt="blocks" width="735"
    height="550" /></p>