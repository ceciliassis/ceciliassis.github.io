---
title: 'Classes em Ruby 101: Atributos Attr Reader, Writer, Accessor'
date: 2017-06-16 21:01:57.000000000 -03:00
categories:
- ruby
tags:
- atributo
- attr
- reader
- accessor
- attr_writer
- attr_accessor
- attr_reader
meta:
  _wpcom_is_markdown: '1'
  _thumbnail_id: '1992'
  _publicize_done_external: a:2:{s:7:"twitter";a:1:{i:15941419;s:56:"https://twitter.com/meRubyGirl/status/875866077565202433";}s:8:"facebook";a:1:{i:17534513;s:38:"https://facebook.com/10155216952243280";}}
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '6193755533'
  _publicize_done_16115499: '1'
  _wpas_done_15941419: '1'
  publicize_twitter_user: meRubyGirl
  publicize_linkedin_url: https://www.linkedin.com/updates?discuss=&scope=534137417&stype=M&topic=6281631772207837184&type=U&a=EqPt
  _publicize_done_16680227: '1'
  _wpas_done_16474047: '1'
  _publicize_done_17773429: '1'
  _wpas_done_17534513: '1'
---
<p style="text-align:center;"><b><i>Hey, como vai?!</i></b></p>
Esse post vou te ensinar a como definir <span style="color:#ff6600;"><code>get</code></span> e <span style="color:#ff6600;"><code>set</code></span> no Ruby usando a família <span style="color:#ff6600;"><code>attr</code></span>. Confuso? Que nada, vem comigo!

Bem, agora que já sabemos como fazer os métodos <span style="color:#ff6600;"><code>get</code></span> e <span style="color:#ff6600;"><code>set</code></span> <a href="{% post_url /ruby/2017-04-26-classes-101-getters-e-setters %}">do zero</a>, por que não usamos as ferramentas que o Ruby tem?
O Ruby já quebra grande parte do galho para gente disponibilizando a família <span style="color:#ff6600;"><code>attr</code></span>, que através de três opções cria automaticamente *getters* e *setters*, sendo que:

<ul>
  <li><span style="color:#ff6600;"><code>attr_reader</code></span> : Cria <strong>somente</strong> o método de leitura
    da variável (<code>get</code>);</li>
  <li><span style="color:#ff6600;"><code>attr_writer</code></span> : Cria <strong>somente</strong> o método de escrita
    da variável (<code>set</code>);</li>
  <li><span style="color:#ff6600;"><code>attr_accessor</code></span> : Cria <strong>ambos</strong> os métodos.</li>
</ul>

Lembrando a forma como declaramos tipos primitivos em outras linguagens, i.e. <span style="color:#ff6600;"><code>int</code></span> ou <span style="color:#ff6600;"><code>bool</code></span>, cada opção é seguida pelo símbolo (<span style="color:#ff6600;"><code>symbol</code></span>) do atributo desejado.

## Método <span style="color:#ff6600;"><code>attr_reader</code></span>

Criando somente o método de leitura, o método <span style="color:#ff6600;"><code>attr_reader</code></span> é ótimo para <a href="{% post_url /ruby/2017-08-10-variavel-local-global-constante %}"> declaração de atributos</a> que não devem sofrer alterações.

```ruby
class Dog
  attr_reader :id

  def initialize
    @id = 1
  end
end

dog = Dog.new
puts "Id: #{dog.id}"
```

<p>Saída:</p>
```
Id: 1
```

Acima, se tentarmos fazer algo como: <span style="color:#ff6600;"><code>dog.name = 'Lince'</code></span>, um erro é lançado, já que não há forma de atribuição de valor. Faça o teste!

## Método <span style="color:#ff6600;"><code>attr_writer</code></span>

Como falado, o método <span style="color:#ff6600;"><code>attr_writer</code></span> permite somente a escrita de valores. 

<!-- Confesso que não vejo motivos para usarmos ele muitas vezes, você tem algum exemplo? Não deixe de comentar! -->

```ruby
class Dog
  attr_writer :name, :height, :weight
  
  def to_s
    "Name: #{@name}, Height: #{@height}, Weight: #{@weight}"
  end
end

dog = Dog.new

dog.name = 'Paul'
dog.height = 15
dog.weight = 15

puts dog
```

<p>Saída:</p>
```
Name: Paul, Height: 15, Weight: 15
```

Opa! *Easter-egg* na área: o método <span style="color:#ff6600;"><code>to_s</code></span>. Esse método, difundido nas linguagens, retorna uma representação em <span style="color:#ff6600;"><code>string</code></span> do objeto. Você, como ávido programador(a), sabe bem que esse é um método muito importante, sendo peça-chave em logs e ferramentas de depuração de código. 

No caso do nosso exemplo, através do método <span style="color:#ff6600;"><code>to_s</code></span> o <span style="color:#ff6600;"><code>puts</code></span> foi capaz de apresentar a nossa representação do objeto de forma clara. <strong>Nunca</strong> se esqueça de definir uma boa representação para o seu objeto!

## Método <span style="color:#ff6600;"><code>attr_accessor</code></span>
Por fim falaremos daquele que faz tudo por nós: o método  <span style="color:#ff6600;"><code>attr_accessor</code></span>.

```ruby
class Dog
  attr_accessor :name, :height
  
  def to_s
    "Name: #{@name}, Height: #{@height}"
  end
end

dog = Dog.new

dog.name = 'Paul'
dog.height = 15
puts dog

dog.name = 'Peter'
puts "Name: #{dog.name}, Height: #{dog.height},"
```

Saída:

```
Name: Paul, Height: 15
Name: Peter, Height: 15
```

Ainda que o código pareça um pouco bagunçado, ele traz o funcionamento do <span style="color:#ff6600;"><code>attr_accessor</code></span>, um método que oferece facilmente <strong>getters</strong> e <strong>setters</strong> prontos para uso.

<hr />

Bem, com isso finalizamos o post de hoje e também a série. Espero que tenham gostado! 
<p style="text-align:right;"><em><strong>    See you later, alligator!</strong></em></p>
<img src="{{ site.baseurl }}/assets/classe101attr.png" alt="classe101attr" width="735" height="550"
  class="alignnone size-full wp-image-1992" />