---
title: Como usar each, select e map para percorrer vetores no Ruby
date: 2017-03-02 19:00:06.000000000 -03:00
parent_id: '0'
published: true
password: ''
status: publish
categories:
- ruby
tags:
- array
- collect
- each
- iterar
- map
meta:
  _wpcom_is_markdown: '1'
  _rest_api_client_id: "-1"
  _rest_api_published: '1'
  _publicize_done_external: a:2:{s:8:"facebook";a:1:{i:15941414;s:38:"https://facebook.com/10154881268553280";}s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/837384997678034945";}}
  _thumbnail_id: '1665'
  _publicize_job_id: '2434199131'
  _publicize_done_16115497: '1'
  _wpas_done_15941414: '1'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6243150689636278272&type=U&a=Zavq
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
# excerpt: 'Hoje vamos continuar falando da parte de read, leitura, dos dados no array. '
---
<p style="text-align:center;"><em><strong>Hey, como vai?!</strong></em></p>
Hoje vamos continuar falando da parte de leitura dos dados de um array. 


Além do acesso por meio de índice, é possível iterar por todos os elementos do array, isso é **percorrer** o vetor acessando todas as suas posições.  Existem vários métodos no Ruby que nos ajudam nessa tarefa, hoje falarei sobre os três mais utilizados: <span style="color:#ff6600;"><code>each</code></span>, 
<span style="color:#ff6600;"><code>select</code></span> e <span style="color:#ff6600;"><code>map</code></span>. 

Preparadx?! Então vamos lá!

<hr />
<p style="text-align:center;"><b>Each</b></p>
<p>Este permite que vejamos e, quem sabe, façamos algo com cada um dos elementos no vetor.</p>
<p>Na frente da chamada pode vir um bloco de instruções, também chamado inline, que informam o quê será realizado com os
  valores dispostos. O bloco deve ser delimitado por chaves (<span style="color:#ff6600;"><code>{}</code></span>) :</p>
<p><img class="alignnone size-full wp-image-1064"
    src="{{ site.baseurl }}/assets/screenshot-from-2017-01-22-22-48-331.png" alt="array.each" width="706"
    height="143" /></p>
<p>Caso queiramos algo mais complexo usamos as <em>keywords</em> <span style="color:#ff6600;"><code>do</code></span> e
  <span style="color:#ff6600;"><code>end</code></span>, iniciando e finalizando o <em>loop</em>:</p>

```ruby
arr = [1, 2, 3, 4, 5]
arr.each do |a|
  num = a * 2
  puts num
end
```

<p>Saída:</p>

```
2
4
6
8
10
```
<p>Note que a variável a ser usada no <em>loop</em> deve ser colocada a frente do comando usando o <em>pipe
    (</em><strong><span style="color:#ff6600;"><code>|</code></span></strong> ).</p>
<hr />
<p style="text-align:center;"><strong>Select</strong></p>
<p>O <span style="color:#ff6600;"><code>select</code></span> é uma arma poderosa do Ruby, que nos permite selecionar
  elementos no array de acordo com uma determinada condição:</p>
<p><img class=" size-full wp-image-1446 aligncenter"
    src="{{ site.baseurl }}/assets/screenshot-from-2017-03-01-23-36-09.png" alt="screenshot-from-2017-03-01-23-36-09"
    width="619" height="121" /></p>
<p>No exemplo temos também o uso da <em>expressão regular</em> (<a href="https://www.regexone.com/">Regex</a>),
  amplamente aceita pela linguagem.</p>
<hr />
<p style="text-align:center;"><strong>Map </strong>e<strong> Collect</strong></p>
<p>Em Ruby temos o caso em que várias coisas tem o mesmo significado, e os próximos métodos são um claro exemplo de tal.
</p>
<p>Ambos servem para iterar sobre todos os elementos do array e fazer o que quisermos com eles, geralmente modificações.
  Algo <em>importante</em> a se notar é que: <strong>enquanto o </strong><span
    style="color:#ff6600;"><code>each</code></span><strong> retorna o próprio array, o </strong><span
    style="color:#ff6600;"><code>map</code></span><strong>/</strong><span
    style="color:#ff6600;"><code>collect</code></span><strong> retorna um novo vetor modificado</strong>.</p>
<p><img class=" size-full wp-image-1444 aligncenter"
    src="{{ site.baseurl }}/assets/screenshot-from-2017-03-01-23-49-32.png"
    alt="Screenshot from 2017-03-01 23-49-32.png" width="615" height="115" /></p>
<p>Note que a própria documentação da linguagem, os trata da mesma forma
  (<code><span style="color:#ff6600;">map</span></code> e <span style="color:#ff6600;"><code>collect</code></span>) .
</p>
<hr />
<p>Bem, creio que com isso finalizamos a sessão de posts: Vetores e Vetores. Espero que tenham gostado!</p>
<h5>P.S.: Para maiores estudos, recomendo a leitura da documentação do Ruby, que conta com informações claras (em
  inglês).</h5>
<p style="text-align:right;"><strong>Até mais!!</strong></p>
<h6 style="text-align:right;">Fontes: <a href="http://stackoverflow.com/questions/5254128/arrayeach-vs-arraymap"
    target="_blank">Array#each vs. Array#map</a>, <a href="http://ruby-doc.org/core-2.3.3/Array.html#method-i-map"
    target="_blank">Ruby Doc: Array</a></h6>
<p><img src="{{ site.baseurl }}/assets/vetores31.png" alt="vetores3" width="735" height="550"
    class="alignnone size-full wp-image-1665" /></p>