---
title: 'Qual a diferença entre `p`, `puts` e `print`? #funTip'
date: 2017-09-16 15:16:51.000000000 -03:00
categories:
- ruby
tags:
- inspect
- p
- print
- puts
- funTip
meta:
  _wpcom_is_markdown: '1'
  _thumbnail_id: '2138'
  _publicize_done_external: a:2:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/909118924041576448";}s:8:"facebook";a:1:{i:17534513;s:38:"https://facebook.com/10155506509883280";}}
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '9355797821'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6314884618277441536&type=U&a=m2zO
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/5p4E5JBSSdt
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---
<p>Você alguma vez já se perguntou: <em>Qual a diferença entre o <span style="color:#ff6600;"><code>p</code></span>, o <span style="color:#ff6600;"><code>puts</code></span> e o <span style="color:#ff6600;"><code>print</code></span> no Ruby?</em> Não se preocupe, eu vou te contar!</p>

<p>Pois bem, aqui vai a sua resposta:</p>

Enquanto o <span style="color:#ff6600;"><code>puts</code></span> é apresenta uma linha "formatata" seguida de um <span style="color:#ff6600;"><code>\n</code></span>, o <span
    style="color:#ff6600;"><code>p</code></span> mostra em sua linha o objeto da forma como ele é, enquanto o  <span style="color:#ff6600;"><code>print</code></span> tem o mesmo comportamento o <span style="color:#ff6600;"><code>puts</code></span>, porém sua resposta não é acompanhada de uma nova linha logo em seguida. 
    
Leitor(a): <em>Como assim? </em> Cecília: <em>Assim:


```ruby
res = [1,2,3]

puts res
p res
print res, res
```

<p>Saída:</p>

```
1
2
3
[1,2,3]
[1, 2, 3][1, 2, 3]
```


<p>O <span style="color:#ff6600;"><code>puts</code></span>, assim como o <span
  style="color:#ff6600;"><code>print</code></span> tratam strings, caracteres mesmo. O <span
  style="color:#ff6600;"><code>p</code></span> lida com objetos, desmacarando-os.</p>

<h2>* Bônus * : Inspect</h2>
Talvez você já tenha ouvido falar do comando <span style="color:#ff6600;"><code>inspect</code></span>. Não?! Que isso, estou aqui para te ajudar!

O  <span style="color:#ff6600;"><code>inspect</code></span> é um <em>alias</em>, isso é, apelido do <span style="color:#ff6600;"><code>p</code></span>, sendo ele um método que deve ser chamado a partir de objetos propriamente ditos:

```ruby
res = [1,2,3]
puts res.inspect
```

<p>Saída:</p>

```
[1,2,3]
```
<p>Mas <span style="color:#ff6600;"><code>p</code></span> é bem mais fácil, certo?</p>
<p>No final das contas, um não é melhor que outro, eles só servem para propósitos diferentes ;) !</p>
<hr />
<p style="text-align:center;">E aí? O quê achou!? Me conte nos comentários!</p>
<p style="text-align:right;"><strong><em>See you later, alligator.</em></strong></p>
<p><img class="alignnone size-full wp-image-2138" src="{{ site.baseurl }}/assets/pvsputs.png" alt="pvsputs" width="735"
  height="550" /></p>