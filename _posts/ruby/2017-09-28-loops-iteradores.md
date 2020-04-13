---
title: 'Tudo o que você precisa saber sobre loops e iteradores em Ruby!'
date: 2017-09-28 18:00:24.000000000 -03:00
categories:
- ruby
tags:
- down
- for
- loop
- step
- times
- to
- up
meta:
  _pingme: '1'
  _encloseme: '1'
  _wpcom_is_markdown: '1'
  _oembed_b81a34c54733b99cc9dc20935439eb72: "{{unknown}}"
  _oembed_2d7d35c99aa84f4363caf42ab7fcff12: "{{unknown}}"
  _oembed_82e14a421d6879acd4b0d0c84f3e1e25: "{{unknown}}"
  _rest_api_published: '1'
  _thumbnail_id: '2141'
  _rest_api_client_id: "-1"
  _publicize_done_external: a:2:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/913509461540474881";}s:8:"facebook";a:1:{i:17534513;s:38:"https://facebook.com/10155540008478280";}}
  _publicize_job_id: '9770913084'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6319275154694242304&type=U&a=RmUc
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/ZGirep7EPB3
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---




<p style="text-align:center;"><strong>Oi, tudo bem com você?</strong></p>
Hoje falarei sobre como podemos percorer objetos e escrever loops em Ruby, vamos lá?

{: .notice}
Read the <a href="https://merubygirl.wordpress.com/2017/05/25/english-version-loops-1/" target="_blank" rel="noopener noreferrer">ENGLISH VERSION</a>.

<!-- No post sobre blocos, falamos rapidamente sobre iteradores e entendemos um pouquinho sobre como podemos usá-los para vermos todos os elementos de um vetor.  -->

<!-- Contudo, sua funções não param aí, sendo possível fazermos coisas ainda mais legais com eles, e é sobre isso que irei falar hoje, vamos lá? -->

 <!-- usando os iteradores como métodos do objeto <span style="color:#ff6600;"><code>Integer</code></span>, a classe que representa os números inteiros em Ruby. -->

<h2>Diferença entre Loops e Iteradores</h2>
Antes de mais nada, é importante que você entenda a diferença entre Loops e Iteradores. Ainda que os dois pareçam coisas iguais, eles não são.  

No Ruby, um **loop** é um conjunto de código que deve ser repetido até que uma condição de parada seja encontrada, ou seja, quando um número for menor que outro por exemplo. Programadores lidam com loops diarimente, alguns exemplos são os loops <span style="color:#ff6600;"><code>while</code></span> e <span style="color:#ff6600;"><code>for</code></span>.

Já os iteradores são **métodos** que permitem a você percorrer (iterar) um conjunto de dados, acessando potencialmente todos os seus elementos. 


<h2>Loops</h2>
Bastante conhecidos, os loops nos ajudam a repetir um código até quando nós quisermos, pedindo sempre uma condição de parada para serem finalizados. 

Sendo uma linguagem completa, o Ruby não só apresenta os loops mais conhecidos no mundo da programação, assim como alguns especiais. São eles:

<h3>Loop</h3>
Claro como o próprio nome, o <span style="color:#ff6600;"><code>loop</code></span> é responsável por executar um pedaço de código *N* vezes, precisando de um critério de parada <span style="color:#ff6600;"><code>break</code></span>, explícito, já que esse nos leva ao infinito simplesmente porque quer.

```ruby
x = 0
loop do
  x += 1
  puts x
  break if x >= 5
end
```

<p>Saída:</p>

```
1
2
3
4
5
```

<p>Note que ele não informa variável ao bloco, e é porque não tem mesmo! Faça o teste e veja:</p>

```ruby
x = 0
loop do |i|
  p i
  x += 1
  break if x >= 10
end
```

<h3>For</h3>
<em>Ah! Mas e o for? O Ruby não tem for??</em> Calma, calma! Temos <span style="color:#ff6600;"><code>for</code></span> em Ruby, mas com uma reviravolta: oor ser basicamente um <span style="color:#ff6600;"><code>each</code></span>, sempre que o Ruby percebe o uso de um <span style="color:#ff6600;"><code>for</code></span>, ele coloca um <span style="color:#ff6600;"><code>each</code></span> no lugar. 

Por isso, sempre que for em usar um <span style="color:#ff6600;"><code>for</code></span> (*bah dum tss*), avalie se o <span style="color:#ff6600;"><code>each</code></span> não seria o mais indicado. 
  
Contudo, todavia, entretado, pelo bem da documentação, vou colocá-lo aqui, OK?!

<p>Expectativa:</p>

```ruby
for i in ['fee', 'fi', 'fo', 'fum']
  print i, " "
end

for i in 1..3
  print i, " "
end
```

<p>Realidade:</p>

```ruby
['fee', 'fi', 'fo', 'fum'].each do |i|
  print i, " "
end

(1..3).each do |i|
  print i, " "
end
```

<p>Saída:</p>

```
fee fi fo fum 1 2 3
```

<h3>While</h3>
<p>Já conhecido, o <span style="color:#ff6600;"><code>while</code></span> faz algo *enquanto* sua condição é satisfeita.</p>

```ruby
y = 1
while y <= 10
  puts y
  y += 1
end
```

<p>Saída:</p>
```
1
2
3
4
5
6
7
8
9
10
```

<p>O <span style="color:#ff6600;"><code>while</code></span> como todos os outros loops, aceita o uso do <span style="color:#ff6600;"><code>break</code></span>, porém atenção - você não pode não precisar dele se fizer uma <strong>boa lógica </strong>de loop.</p>

<h3>UNTIL</h3>
Finalmente temos o <span style="color:#ff6600;"><code>until</code></span>, mais um diferencial do Ruby. Também, claro como a luz do sol, o <span style="color:#ff6600;"><code>until</code></span> executa um conjunto de comando <strong>até que</strong> sua condição seja satisfeita – sendo, então, o contrário do <span style="color:#ff6600;"><code>while</code></span>.

```ruby
a = 1
until a >= 10
  puts a
  a += 1
end
```

<p>Saída:</p>
```
1
2
3
4
5
6
7
8
9 
```

<hr />



<h2>Iteradores</h2>
Possivelmente não tão conhecidos, os iteradores procuram facilitar a vida o programador que deseja percorrer objetos acessando potencialmente todos os seus elementos. 

<!-- Com isso, sendo o Ruby a linguagem linda que é, essa oferece diversos tipos de iteradores que facilitam muito a vida do programador na hora de codificar um programa.  -->

No post sobre blocos vimos alguns deles como o <span style="color:#ff6600;"><code>each</code></span> e o <span style="color:#ff6600;"><code>map</code></span>, por exemplo. Porém, por serem métodos é possível esses sejam usados com outros tipos de objetos:

<h3>Times</h3>
<p>Método da classe <span style="color:#ff6600;"><code>Integer</code></span>, o times permite que façamos algo
  <em>N</em> vezes.</p>

```ruby
3.times do
  print 'Ho! '
end
```

<p>Saída:</p>

```
  Ho! Ho! Ho!
```

<h3>Upto</h3>
<p>Já o <span style="color:#ff6600;"><code>upto</code></span>, como o próprio nome diz, vai até um determinado
  número, permitindo, ao contrário do <span style="color:#ff6600;"><code>times</code></span>, que o valor atual seja utilizado dentro do bloco.</p>

```ruby
0.upto(9) do |x|
  print x, " "
end
```

<p>Saída:</p>

```
0 1 2 3 4 5 6 7 8 9
```

<h3>Downto</h3>
Contrário ao <span style="color:#ff6600;"><code>upto</code></span>,  <span style="color:#ff6600;"><code>downto</code></span> faz o caminho reverso, contanto os números de cima para baixo.

```ruby
9.downto(0) do |x|
  print x, " "
end
```

<p>Saída:</p>

```
9 8 7 6 5 4 3 2 1 0
```

<h3>Step</h3>

O <span style="color:#ff6600;"><code>step</code></span> itera até um determinado número (inclusive), pulando *N* números.

```ruby
0.step(12, 3) { |x| print x, " " }
```

<p>Saída:</p>

```
0 3 6 9 12
```

Cara, o Ruby é uma linguagem muito do povo, fala sério. <3

<h3>Each</h3>
Já apresentado um monte de vezes no blog, o <span style="color:#ff6600;"><code>each</code></span> nos permite iterar sobre estruturas que dão suporte ao método e que dessa forma podem aproveitar das maravilhas do módulo <a href="https://ruby-doc.org/core-2.4.1/Enumerable.html" target="_blank">Enumerable</a>.

```ruby
[ 1, 1, 2, 3, 5 ].each { |val| print val, " " }
```

<p>Saída:</p>

```
1 1 2 3 5
```


<hr />
<p style="text-align:center;">Então, ficou faltando algo? Pode me falar nos comentários!</p>
<p style="text-align:right;"><strong><em>Até o próximo post!</em></strong></p>
<p><img class=" size-full wp-image-2141 aligncenter" src="{{ site.baseurl }}/assets/iteradores.png" alt="iteradores"
    width="735" height="550" /></p>