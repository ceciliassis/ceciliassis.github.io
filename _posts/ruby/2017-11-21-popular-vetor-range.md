---
title: 'Como criar vetores usando "range" em Ruby #funTip'
date: 2017-11-21 11:45:52.000000000 -02:00
categories:
  - ruby
tags:
  - array
  - funTip
  - new
  - ranges
meta:
  _wpcom_is_markdown: '1'
  _thumbnail_id: '2218'
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_done_external: a:1:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/932974147503886336";}}
  _publicize_job_id: '11678212314'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6338739841508872192&type=U&a=6FRL
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  publicize_google_plus_url: https://plus.google.com/108637894577435887042/posts/3MtcSrSYfb1
  _publicize_done_18233347: '1'
  _wpas_done_17998613: '1'
---
<p>Quantas vezes programando você se deparou com a necessidade de criar um array populado com vários números?</p>


<p>Bem, isso sempre acontece comigo! E o Ruby, muito legal que é, soluciona isso rapidamente com os <em>Ranges</em>:</p>

```ruby
arr = Array(1..5)
p arr
```

<p>Saída:</p>

```
  [1, 2, 3, 4, 5]
```

<p>Viu como é que fácil?</p>
<p>Usamos o construtor da classe com o range que queremos e está tudo pronto!</p>

```ruby
arr = Array('a'..'e')
p arr
```

<p>Saída:</p>

```
["a", "b", "c", "d", "e"]
```

<p>O seguinte código também funciona:</p>

```ruby
arr = ('a'..'e').to_a
p arr
```

<p>Pois usa o método <span style="color:#ff6600;"><code>to_a</code></span>: <em>to array</em>, mas eu acho o uso do
  construtor mais intuitivo e você?</p>
<p style="text-align:right;"><strong>Vamos lá! Brinque um pouco e deixa essa brincadeira nos comentários!</strong></p>
<p><img class=" size-full wp-image-2218 aligncenter" src="{{ site.baseurl }}/assets/array_range.png" alt="array_range"
    width="735" height="550" /></p>