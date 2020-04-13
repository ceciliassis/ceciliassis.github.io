---
title: 'Qual a diferença entre `each.with_index` e `each_with_index` ? #funTip'
date: 2017-11-14 11:45:36.000000000 -02:00
categories:
- ruby
tags:
- each
- index
- with
- funtip
meta:
  _wpcom_is_markdown: '1'
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _thumbnail_id: '2210'
  _publicize_done_external: a:2:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/930434076149977088";}s:8:"facebook";a:1:{i:17534513;s:38:"https://facebook.com/10155662373423280";}}
  _publicize_job_id: '11432517251'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6336199768691212288&type=U&a=hooG
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/hdqh8ackkuC
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---
Já se perguntou qual a diferença entre `each.with_index` e `each_with_index`, esse post vem para te ajudar a responder essa pergunta!


<p>O Ruby apresenta duas formas de iterarmos sobre <a href="https://ruby-doc.org/core-2.4.1/Enumerable.html"
    target="_blank" rel="noopener">objetos</a> quando queremos acesso aos seus índices: o <span style="color:#ff6600;"><code>each_with_index</code></span> o <span
    style="color:#ff6600;"><code>each.with_index</code></span></p> <strong>Mas qual a diferença entre os dois?</strong>

Pois bem, a grande sacada está no ponto! Isso mesmo! 

Sendo o <span style="color:#ff6600;"><code>each.with_index</code></span> um método que extende a funcionalidade do <span style="color:#ff6600;"><code>each</code></span>, esse aceita um deslocamento (*offset*) que é somado ao índice original, ou seja, um pequeno ponto de começo para representar os seus números. Já o <span style="color:#ff6600;"><code>each_with_index</code></span> não permite esse argumento.

<p>Veja:</p>

```ruby
[:foo, :bar, :baz].each.with_index(2) do |value, index|
  puts "#{index}: #{value}"
end
```


```ruby
[:foo, :bar, :baz].each_with_index do |value, index|
  puts "#{index}: #{value}"
end
```

<p>Saída:</p>

```
2: foo
3: bar
4: baz
```


```
0: foo
1: bar
2: baz
```



<p>Simples, mas ajuda.</p>

<h5>Thanks to https://stackoverflow.com/a/20258160</h5>
<p><img src="{{ site.baseurl }}/assets/each_with_index1.png" alt="each_with_index" width="735" height="550"
    class="alignnone size-full wp-image-2210" /></p>