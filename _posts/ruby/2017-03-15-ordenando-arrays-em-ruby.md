---
title: Como ordenar array (vetor) em Ruby
date: 2017-03-15 16:00:32.000000000 -03:00
categories:
- ruby
tags: 
  - vetor
  - ordenar
  - sort
  - array
meta:
  _wpcom_is_markdown: '1'
  _thumbnail_id: '1769'
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_done_external: a:2:{s:8:"facebook";a:1:{i:15941414;s:38:"https://facebook.com/10154926306658280";}s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/842043969483771905";}}
  _publicize_job_id: '2897219019'
  _publicize_done_16115497: '1'
  _wpas_done_15941414: '1'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6247809664684224512&type=U&a=yX0q
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
---
<p style="text-align:center;"><em><strong>Hey, como vai?!</strong></em></p>
<p>Bem, hoje quero falar de métodos de ordenação, mas nada complicado demais, OK?!</p>
<p>O Ruby tem em si um método embutido, chamado <span style="color:#ff6600;"><code>sort</code></span>, podendo ser in
  place (no mesmo objeto) ou não. Este, por padrão, ordena de forma <strong>crescente</strong>:</p>
<p><img class=" size-full wp-image-1716 aligncenter" src="{{ site.baseurl }}/assets/arraysort.png" alt="array#sort"
    width="454" height="59" /></p>
<p>Mas também aceita, como parâmetro, a <strong>maneira</strong> que deverá ser feita a ordenação. Facilitando todo
  nosso processo: <img class=" size-full wp-image-1722 aligncenter" src="{{ site.baseurl }}/assets/arraysort2.png"
    alt="array#sort2.png" width="444" height="32" /></p>
<p>Aqui temos algo diferente e que será abordado em breve, o <strong>spaceship operator</strong>, que
  <em>basicamente </em><strong> </strong>compara a variável a esquerda com a à direita. Tirando isso, nada de novo,
  certo?</p>
<p>Vamos a outro exemplo, dessa vez usando somente uma variável para comparação:</p>
<p><img class=" size-full wp-image-1736 aligncenter"
    src="{{ site.baseurl }}/assets/screenshot-from-2017-03-13-16-19-29.png" alt="Screenshot from 2017-03-13 16-19-29"
    width="510" height="85" /></p>
<p>Neste também temos algo novo: <span style="color:#ff6600;"><code>%w</code></span>, um delimitador especial do Ruby,
  mostrado uma vez no post terceiro post da série <a
    href="https://merubygirl.wordpress.com/2017/03/02/vetores-e-vetores-parte-3/">Vetores e Vetores</a>, responsável por
  fazer um array somente de palavras (<strong>strings</strong>), onde as mesmas são separadas por
  <em><strong>espaço</strong></em>.</p>
<hr />
<p style="text-align:center;"><strong>SORT_BY</strong></p>
<p>Para finalizar, o temos o método <code>sort_by</code> , que em sua implementação transforma cada elemento do vetor em
  um outro temporário, contendo índice e valor correspondente.</p>
<p>Dado sua forma de funcionamento, seu custo é <a href="http://apidock.com/ruby/Enumerable/sort_by"
    target="_blank">alto</a>, mas necessário na ordenação de Hashes, tópico de próximo assunto em nosso blog:</p>

```ruby
array = []
hash1 = {:name => 'john', :age => 23}
hash2 = {:name => 'tom', :age => 24}
hash3 = {:name => 'adam', :age => 3}

array.push(hash1, hash2, hash3)
res = array.sort_by { |item| item[:name] }

puts res
```

<p>Saída:</p>

```
{:name=>"adam", :age=>3}
{:name=>"john", :age=>23}
{:name=>"tom", :age=>24}
```

<hr />
<p>Assim deixo como <strong>teste</strong> a vocês: tentem usar o método <span
    style="color:#ff6600;"><code>sort</code></span> sobre o último exemplo, algum <em>erro</em> é gerado? Deixe nos
  comentários a sua resposta!</p>
<p style="text-align:right;"><strong>Até mais!!</strong></p>
<h6 style="text-align:right;">Thanks to: <a href="http://www.rubyinside.com/how-to/ruby-sort-hash" target="_blank">How
    to Sort a Hash in Ruby</a>, <a href="http://stackoverflow.com/questions/14113909/ruby-sort-by-method"
    target="_blank">ruby sort_by method</a>, <a href="http://ruby-doc.org/core-2.4.0/Array.html#method-i-sort"
    target="_blank">Ruby Doc: Array</a>, <a href="http://apidock.com/ruby/Enumerable/sort_by">ApiDock - Sort by</a></h6>
<p><img src="{{ site.baseurl }}/assets/sort.png" alt="sort" width="736" height="551"
    class="alignnone size-full wp-image-1769" /></p>