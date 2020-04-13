---
title: 'Classes em Ruby 101: como acessar atributos com `get` e `set`'
date: 2017-04-26 19:48:21.000000000 -03:00
categories:
- Ruby
tags:
- get
- set
- getter
- setter
meta:
_wpcom_is_markdown: '1'
_oembed_22c610d79efc1720c6496129dd92d8e9: "{{unknown}}"
_publicize_job_id: '4432278256'
_thumbnail_id: '1891'
_publicize_done_external: a:2:{s:8:"facebook";a:1:{i:15941414;s:38:"https://facebook.com/10155059189818280";}s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/857365799878762497";}}
_rest_api_published: '1'
_rest_api_client_id: "-1"
_publicize_done_16115497: '1'
_wpas_done_15941414: '1'
_publicize_done_16115499: '1'
_wpas_done_15941419: '1'
publicize_twitter_user: meRubyGirl
publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6263131493401444352&type=U&a=pqe6
_publicize_done_16680227: '1'
_wpas_done_16474047: '1'
author:
login: merubygirl
email: cyassis@gmail.com
display_name: Me, Ruby Girl.
first_name: ''
last_name: ''
permalink: "/2017/04/26/classes-101-getters-e-setters/"
---
<p>
<!-- Classes 101: GETTERS e SETTERS -->
</p>
<p style="text-align:center;"><strong><em>Hey, como vai?!</em></strong></p>
<p>Hoje vamos falar um pouco dos famosos <strong>getters</strong> e <strong>setters</strong> e como fazemos eles do zero usando puro Ruby, shall we?</p>

<p>Para fazermos o que precisamos hoje, vamos usar uma classe de animais, com um <span style="color:#ff6600;"><code>initialize</code></span> básico:</p>

```ruby
class Animal
  def initialize
    puts "Criando um novo animal"
  end
end
```

<p>Ok, agora vamos escrever <span style="color:#ff6600;"><code>getters</code></span>  e <span style="color:#ff6600;"><code>setters</code></span> como já estamos acostumados.</p>

```ruby
def set_name(new_name)
  @name = new_name
end
def get_name
  @name
end
```

<p>Bem, acima temos nada além do que já sabemos: métodos com parâmetros e atribuição de valores. Contudo, ainda que funcional o código acima, <a href="{% post_url /ruby/2017-08-10-variavel-local-global-constante %}"> de acordo com as boas práticas</a>, não é recomendado. Por isso vamos a forma correta, seria ela:</p>

```ruby
def name
  @name
end

def name=(new_name)
  if new_name.is_a?(Numeric)
    puts "Nome não pode ser um número"
  else
    @name = new_name
  end
end
```

Neste exemplo, temos um *easter_egg*: o método <span style="color:#ff6600;"><code>is_a?</code></span>. Esse método valida exatamente o que o seu nome indica: a qual classe pertence o objeto repassado como argumento.

Além disso, um novo conhecimento é apresentado aqui: operadores como métodos. Mas isso é assunto para um próximo momento!

<p>Juntando tudo temos: </p>


```ruby
class Animal
  def initialize
    puts "Criando um novo animal"
  end

  def name
    @name
  end

  def name=(new_name)
    if new_name.is_a?(Numeric)
      puts "Nome não pode ser um número"
    else
      @name = new_name
    end
  end
end

cat = Animal.new
cat.name = 'Gatito'
puts "O nome do animal é #{cat.name}"
```

<p>Saída:</p>
```
Criando um novo animal
O nome do animal é Gatito
```

<p>Simples e objetivo, <strong>não</strong>?</p>
<p>Por hoje é só, nos vemos no <a href="{% post_url /ruby/2017-06-16-classes-101-familia-attr %}"> próximo post da série</a> sobre como podemos usar a família <span style="color:#ff6600;"><code>attr</code></span> para facilitar nossa vida na criação dos <span style="color:#ff6600;"><code>getters</code></span>  e <span style="color:#ff6600;"><code>setters</code></span>.</p>

<p style="text-align:right;"><em><strong>Até mais!!</strong></em></p>
<p><img src="{{ site.baseurl }}/assets/classe101getset.png" alt="classe101getset" width="735" height="550"
  class="alignnone size-full wp-image-1891" /></p>