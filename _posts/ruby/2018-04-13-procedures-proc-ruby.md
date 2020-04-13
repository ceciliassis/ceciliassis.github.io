---
title: 'Ruby Proc: O que é e como usar?'
date: 2018-04-13 18:00:52.000000000 -03:00
categories:
  - ruby
tags:
  - block
  - bloco
  - do
  - end
  - lambda
  - proc
  - procedure

meta:
  _wpcom_is_markdown: '1'
  _thumbnail_id: '2278'
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_done_external: a:2:{s:7:"twitter"; a:1:{i:15941419; s:56:"https://twitter.com/meRubyGirl/status/984900183275261953"; }s:8:"facebook"; a:1:{i:17534513; s:38:"https://facebook.com/10156088484878280"; }}
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6390665877716500480&type=U&a=FWkF
  _publicize_job_id: '16771830308'
  timeline_notification: '1523653472'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/gsEvmp1LS1D
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---

<p><em><strong>Oi, como vai?<br />
</strong></em></p>
Hoje falarei sobre as <span style="color:#ff6600; "><code>procs</code></span>, também conhecidas como <span style="color:#ff6600; "><code>procedures</code></span> do Ruby.

<h2>O que é uma Proc?</h2>
Estando intimamente ligadas com os <span style="color:#ff6600; "><code>blocks</code></span>, as <span style="color:#ff6600; "><code>procs</code></span> são a transformação de um bloco em um objeto. Ou seja, as <span style="color:#ff6600; "><code>procedures</code></span> são nada mais, nada menos que aquilo que o seu próprio nome indica: procedimentos; objetos que armazenam trechos reutilizáveis de código. 

Ficou confuso? Vamos ao código!

<!-- <p>As <span style="color:#ff6600; "><code>procs</code></span>, abreviação para <i>procedures</i> (procedimentos), são objetos que representam os blocos, deste que os mesmos sejam convertidos em tal.</p>
<p>Por serem aquelas que representam os blocos, estas também recebem a mesma definição: <em>trechos de código que podem ser usados de forma reutilizável</em>.</p>
<hr /> -->
<h2>Declaração</h2>
O primeiro passo para utilização de uma <span style="color:#ff6600;"><code>proc</code></span> é a sua declaração. Podendo ocorrer de duas formas, o momento de instanciação de uma <span style="color:#ff6600;"><code>proc</code></span> é muito importante, pois é a por meio dele que um <span style="color:#ff6600; "><code>block</code></span> é transformado em objeto, indicando a <span style="color:#ff6600;"><code>proc</code></span> qual trecho de código essa irá executar.  

```ruby
pr = Proc.new { puts ' Sou uma proc' }

# ou

pr = proc { puts ' Sou uma proc' }
```

<!-- Podendo ser uma proOnde a primeira instância um novo objeto diretamente, enquanto  você pode perceber <span style="color:#ff6600; "><code>procs</code></span> podem ser declaradas de duas formas: -->

<!-- - <strong>instanciando-se</strong> um objeto explicita da classe ou; <br /> -->
<!-- - utilizando a <strong>palavra-chave</strong> representa este comando.</p> -->


Para entender melhor o conceito, faça o seguinte teste: crie uma <span style="color:#ff6600; "><code>proc</code></span> sem um <span style="color:#ff6600; "><code>block</code></span>.

<h2>Execução</h2>
O segundo passo é então a execução do código: para executar uma <span style="color:#ff6600; "><code>proc</code></span> temos que chamar o método <span style="color:#ff6600; "><code>call</code></span> sobre ela.

```ruby
pr.call
```


<p>Saída</p>

```
Sou uma proc
```

E voilá, tudo certo!

<h2>Argumentos</h2>
Por ser a abstração de um bloco, as <span style="color:#ff6600; "><code>procs</code></span> suportam também a definição de argumentos. Para isso, esses precisam ser configurados durante a instanciação do objeto e repassados durante a sua chamada por meio do método  <span style="color:#ff6600; "><code>call</code></span> .

```ruby
pr = proc { |a, b| puts "a + b = #{a + b}" }
pr.call(5, 10)
```

 
<p>Saída</p>

```
a + b = 15
```
{% capture notice-2 %}
**Atenção**: Saiba que para as <span style="color:#ff6600; "><code>procs</code></span> os argumentos <strong>não</strong> são obrigatórios e erro nenhum é apresentado caso alguns dos parâmetros não seja informado.

```ruby
pr = proc { |a, b| puts "a:#{a}, b:#{b}" }
pr.call()
```

Saída

```
a:, b:
```
{% endcapture %}

<div class="notice--warning">
  {{ notice-2 | markdownify }}
</div>


<h2>Escopo</h2>
<p>Outra informação importante sobre as <span style="color:#ff6600; "><code>procs</code></span> é que por serem closures <sup id="fnref-2277-1"><a href="#fn-2277-1" class="jetpack-footnote">1</a></sup>, <sup id="fnref-2277-2"><a href="#fn-2277-2" class="jetpack-footnote">2</a></sup>, essas possuem um escopo próprio que não é perdido quando são executadas.</p>

{% highlight ruby linenos %}
def gen_times(factor)
  return Proc.new {|n| n * factor }
end

times3 = gen_times(3)
times5 = gen_times(5)

puts times3.call(12)
puts times5.call(5)
puts times3.call(times5.call(4))
{% endhighlight %}

<p>Saída</p>

```
36
25
60
```


<p>Sei que o exemplo pode parecer complexo por isso explicarei passo a passo. Vamos lá?</p>
<ul>
  <li>Declaramos o método <span style="color:#ff6600; "><code>gen_times</code></span> que recebe como argumento o parâmetro <span style="color:#ff6600; "><code>factor</code></span>; </li>
  <li>Um objeto <span style="color:#ff6600; "><code>Proc</code></span> é retornado definindo um bloco que recebe um argumento <span style="color:#ff6600; "><code>n</code></span> e por sua vez retorna o produto de <span style="color:#ff6600; "><code>n</code></span> por <span style="color:#ff6600; "><code>factor</code></span>; </li>
  <li>A variável <span style="color:#ff6600; "><code>times3</code></span> é instanciada com o retorno do método <span style="color:#ff6600; "><code>gen_times</code></span> com <strong>3 </strong> enquanto <span style="color:#ff6600; "><code>factor</code></span>; </li>
  <li>O mesmo ocorre para a variável <span style="color:#ff6600; "><code>times5</code></span> dessa vez com <span style="color:#ff6600; "><code>factor</code></span> igual a <strong>5</strong>; </li>
  <li>A <i>procedure</i> armazenada em <span style="color:#ff6600; "><code>times3</code></span> é chamada repassando <strong>12</strong> ao parâmetro <span style="color:#ff6600; "><code>n</code></span>; </li>
  <li>Igualmente acontece para <span style="color:#ff6600; "><code>times5</code></span>; </li>
  <li>Última linha de execução e ambas as <i>procudures</i> são combinadas, com o retorno de uma servindo de argumento para a outra.</li>
</ul>

<p>Sendo assim, ao observar a saída, você pode perceber que o primeiro resultado é correspondente a <span style="color:#ff6600; "><code>12 * 3</code></span>, o segundo a <span style="color:#ff6600; "><code>5 * 5</code></span> e o terceiro: <span style="color:#ff6600; "><code>20 * 3</code></span>.</p>

<p>Ou seja no momento em que o argumento <span style="color:#ff6600; "><code>factor</code></span> foi estabelecido, o mesmo não se perdeu, ainda que diferentes chamadas do método <span style="color:#ff6600; "><code>call</code></span> fossem executas sobre os objetos.</p>


<hr />
<p>Bem, por hora acho que está bom. No próximo post falaremos sobre <strong>lambdas</strong> e como elas são diferentes das <strong>procs</strong>.</p>
<p style="text-align:center; ">Mas me diga, você ja conhecia as <em>procedures</em>? E como as usava? Fala pra gente aí nos comentários!</p>
<p style="text-align:center; ">Te vejo no próximo post hein!</p>
<p style="text-align:right; "><em><strong><br />
See you later, alligator!</strong></em></p>
<p><img class=" size-full wp-image-2278 aligncenter" src="{{ site.baseurl }}/assets/proc.png" alt="proc" width="820" height="614" /></p>
<div class="footnotes">
<hr />
<ol>
<li id="fn-2277-1">
<a href="https://stackoverflow.com/a/111111/6758434">Stackoverflow</a>&#160; <a href="#fnref-2277-1">&#8617; </a>
</li>
<li id="fn-2277-2">
<a href="http://bit.ly/2E5fef7">The Comprehensive Guide to JavaScript Design Patterns</a>&#160; <a href="#fnref-2277-2">&#8617; </a>
</li>
</ol>
</div>

