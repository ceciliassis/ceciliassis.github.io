---
title: 'Qual a diferença entre `sprintf`, `format` e `printf` ? #funTip'
date: 2017-11-07 11:45:52.000000000 -02:00
categories:
- ruby
tags:
- funtip
- format
- printf
- sprintf
- string
meta:
  _rest_api_published: '1'
  _thumbnail_id: '2204'
  _wpcom_is_markdown: '1'
  _rest_api_client_id: "-1"
  _publicize_done_external: a:2:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/927896390847606784";}s:8:"facebook";a:1:{i:17534513;s:38:"https://facebook.com/10155644082378280";}}
  _publicize_job_id: '11180785638'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6333662083988615168&type=U&a=_pMx
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/R8ed86wwLC2
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---
<p>Hoje vou te explicar a diferença entre <span style="color:#ff6600;"><code>printf</code></span>, <span
    style="color:#ff6600;"><code>sprintf</code></span> e <span style="color:#ff6600;"><code>format</code></span>. Simbora?</p>


<h1>Format e Sprintf</h1>
<p>Pois bem, o que a documentação do Ruby - um dos <ins>amores</ins> da minha vida - <a
    href="https://ruby-doc.org/core-2.4.2/Kernel.html#method-i-sprintf">fala</a> é o seguinte:</p>
<p><img class=" size-full wp-image-2187 aligncenter" src="{{ site.baseurl }}/assets/sprintt.png" alt="sprintt"
    width="584" height="79" /></p>
<p>Ou seja, o que o método faz é retorna uma nova string formatada segundo os parâmetros a ela passados, o que lembra
  muito o <span style="color:#ff6600;"><code>printf</code></span> da linguagem C não é mesmo? <em>Spoiler Alert!</em>
</p>
<p>Quando <a href="https://ruby-doc.org/core-2.4.0/String.html#method-i-25">procuramos</a> sobre o <span
    style="color:#ff6600;"><code>format</code></span> o quê temos é:</p>
<p><img class=" size-full wp-image-2184 aligncenter" src="{{ site.baseurl }}/assets/format.png" alt="format" width="560"
    height="106" /></p>
<p>Logo, o <span style="color:#ff6600;"><code>format</code></span> também retorna uma nova <em>string</em> que foi
  formatada segundo um padrão determinado das <em>flags</em> e caso sejam usadas várias delas um <em>array</em> deve
  especificar qual valor indicado para cada uma delas.</p>
<p>Simples não?</p>
<p>Vamos a um exemplo comparativo:</p>

```ruby
# FORMAT
format_string = "%05d" % 123
puts 'String usando o método format: ' + format_string

# SPRINTF
sprintf_string = sprintf("%05d", 123)
puts 'String usando o método sprintf: ' + sprintf_string
```


<p>Saída:</p>

```
String usando o método format: 00123
String usando o método sprintf: 00123
```


<p>Como você pode perceber, a principal diferença entre eles é que o <span
    style="color:#ff6600;"><code>sprintf</code></span> separa flags e argumentos por <strong>vírgula</strong>, enquanto
  o <span style="color:#ff6600;"><code>format</code></span> usa o sinal de <strong>porcentagem</strong>.</p>
<p>É importante sabe que aquelas flags que se aplicam pra um, também funcionarão para o outro e documentação Ruby
  explica muito bem cada uma delas! <em>Se quiser que eu me aprofunde nelas, deixe aqui nos comentários!</em></p>
<h1>Printf</h1>
<p>Se você é uma daquelas(es) que já mexeu com a linguagem C, o <span style="color:#ff6600;"><code>printf</code></span>
  é seu parceiro, e o seu comportamento não muda muito do que você está acostumada(o) não viu!</p>
<p>Dando uma olhada na <a href="https://ruby-doc.org/core-2.4.2/Kernel.html#method-i-printf">documentação</a> temos:</p>
<p><img class=" size-full wp-image-2185 aligncenter" src="{{ site.baseurl }}/assets/printf1.png" alt="printf1"
    width="584" height="249" /></p>
<p>Nada, não é mesmo? <em>Nãaaaaaaao!!</em></p>
<p>O que Ruby a nossa parceira nos fala aqui é que o <span style="color:#ff6600;"><code>printf</code></span> nada mais é
  que uma escrita na tela do o quê está sendo passado enquanto argumento da função, e se a gente prestar atenção vemos o
  uso do <span style="color:#ff6600;"><code>sprintf</code></span>, nosso novo melhor amigo, percebeu?</p>
<p>Vamos dar uma olhada no código-fonte? Ah! Pra você que ainda não sabia, a documentação do Ruby disponibiliza a
  implentação em C, sua linguagem base, de grande parte, se não todos, dos métodos que possui e utiliza viu
  <em><strong>#ficaADica</strong></em>. OK então, aqui vai:</p>
<p><img class=" size-full wp-image-2186 aligncenter" src="{{ site.baseurl }}/assets/printf2.png" alt="printf2"
    width="355" height="478" /></p>
<p>Viu o <span style="color:#ff6600;"><code>sprintf</code></span> ali de novo? Sensacional hein!</p>
<p>Não me esquecendo do exemplo:</p>

```ruby
  printf('String usando o método printf: %05d', 123)
```


<p>Saída:</p>

```
  String usando o método printf: 00123
```


<p>Lembrete importante: Como no C o <span style="color:#ff6600;"><code>printf</code></span> não traz no fim de cada
  linha um '<em>newline</em>', ou, <span style="color:#ff6600;"><code>\n</code></span>, pois o formato da string quem
  define é você, certo?!</p>
<hr />
<p>Sendo assim, para finalizarmos e darmos aquela recapitulada básica, taí a colinha:</p>
<p><span style="color:#ff6600;"><code>sprintf</code></span> e <span style="color:#ff6600;"><code>format</code></span>
  retorna uma nova string formatada; <span style="color:#ff6600;"><code>printf</code></span> apresenta na tela um
  conteúdo formatado.</p>
<hr />
<p>E aí, curtiu o conteúdo?? Fala pra mim nos comentários poooor favooor! Se tiver alguma coisa errada também ok?
  <strong>Conto com vocês</strong>!</p>
<p style="text-align:right;"><em><strong>Beijos e até o próximo post!</strong></em></p>
<h5>Thanks to: https://www.theurbanpenguin.com/ruby-using-sprintf-and-printf-to-format-strings/</h5>
<p><img class=" size-full wp-image-2204 aligncenter" src="{{ site.baseurl }}/assets/sprintf_printf_format.png"
    alt="sprintf_printf_format" width="735" height="550" /></p>
<p> </p>