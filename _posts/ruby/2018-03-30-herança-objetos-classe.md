---
title: Tudo sobre herança e seus conceitos em Ruby!
date: 2018-03-30 17:51:34.000000000 -03:00
categories:
- ruby
tags:
- child
- filho
- herança
- mãe
- pai
- parent
- superclasse
---
<p>Hoje vamos falar de herança.</p>
<p>O conceito de herança se aplica quando nos perguntamos se um objeto é um subtipo de outro, ou seja, um cachorro é um
  animal, mas um animal não é necessariamente um cachorro certo?</p>


<p>Em Ruby, tais conceitos não mudaram.</p>
<p>Quando queremos explicitar uma relação de herança usamos somente um caractere: <span
    style="color:#ff6600;"><code><</code></span>, e tudo está dito.</p>
<p>Vamos a um exemplo presente no livro <a href="https://pragprog.com/book/ruby4/programming-ruby-1-9-2-0"
    target="_blank">Programming Ruby 1.9 &amp; 2.0</a>:</p>

```ruby
class Parent
  def say_hello
    puts "Hello from #{self.class}"
  end
end

p = Parent.new
p.say_hello

# sub classe de "parent"
# herda todos os métodos da sua superclasse
class Child < Parent
end

c = Child.new
c.say_hello
```


<p>Saída</p>

```
Hello from Parent
Hello from Child
```


<p>Explicando rapidamente o exemplo: Na linha 3 formatamos a saída do método referenciando o objeto que acabou de ser
  criado (linha 7) com o nome da classe do mesmo: <span style="color:#ff6600;"><code>self.class</code></span>.</p>
<p>Logo depois, na linha 10, definimos a herança com o símbolo <span style="color:#ff6600;"><code><</code></span>,
  dizendo que <b>Child</b> <i>herda</i> de <b>Parent</b>, e assim a mágica acontece, pois quando chegamos na última
  linha do código o objeto <strong>c</strong> chama o método <span style="color:#ff6600;"><code>say_hello</code></span>
  mostrando a todos de onde veio.</p>
<p>Bem, o exemplo é bem simples, mas representa bem a simplicidade do Ruby que nos permite fazer muito com tão pouco.
</p>
<hr />
<h1>Super</h1>
<p>Como em outras linguagens, o Ruby também conta com um mecanismo para que subtipos chamem métodos de sua superclasse.
</p>
<p>Para isso é necessário que a classe filha defina um método que possua o mesmo nome daquele o qual quer invocar da
  classe pai, com isso, dentro deste, chamasse o comando <span style="color:#ff6600;"><code>super</code></span>.</p>
<p>Vamos utilizar o exemplo anterior:</p>

```ruby
class Parent
  def say_hello
    puts "Hello from #{self.class}"
  end
end

p = Parent.new
p.say_hello

class Child < Parent
  def say_hello
    super
  end
end

c = Child.new
c.say_hello
```


<p>Saída</p>

```
Hello from Parent
Hello from Child
```


<p>Neste caso, quando atingimos a última linha do exemplo o comando presente em <strong>Child</strong> será executado.
  Este por sua vez chama pelo método de sua classe pai que o define informando uma saída na tela.</p>
<p>Também é possível passarmos argumentos para o método <span style="color:#ff6600;"><code>super</code></span>, ainda
  que aquele da subclasse não receba nenhum.</p>

```ruby
class Parent
  def say_hello_with_arg(from)
    puts "Hello from #{from}"
  end
end

class Child < Parent
  def say_hello_with_arg
    super('The Child')
  end
end
p = Parent.new
p.say_hello_with_arg(p.class)

c = Child.new
c.say_hello_with_arg
```


<p>Saída</p>

```
Hello from Parent
Hello from The Child
```


<p>Dessa forma, ainda que na classe <span style="color:#ff6600;"><code>Child</code></span> o método <span
    style="color:#ff6600;"><code>say_hello_with_arg</code></span> não defina nenhum parâmetro, ao chamar aquele em sua
  superclasse que o faz a mensagem desejada é obtida.</p>
<hr />
<h1>Superclasse</h1>
<p>Existe ainda uma forma mais simples de sabermos qual objeto pertence a qual, com a chamada do método <span
    style="color:#ff6600;"><code>superclass</code></span>.</p>
<p>Este informa o nome da superclasse do objeto que o invoca.</p>

```ruby
class Parent
end

class Child < Parent
end

puts Child.superclass
puts Parent.superclass
```


<p>Saída</p>

```
Parent
Object
```


<hr />
<p>Por fim, é importante salientar que o Ruby <b>NÃO</b> aceita múltiplas heranças.</p>
<p style="text-align:center;">Com isso finalizamos o post de hoje. Me diga nos comentários o que achou e como você
  acredita que possa usar a <span style="color:#ff6600;"><code>herança</code></span> no seu dia-a-dia.</p>
<p style="text-align:right;"><em><strong><br />
      See you later, alligator!</strong></em></p>
<p><img src="{{ site.baseurl }}/assets/heranc3a7a.png" alt="herança" width="820" height="614"
    class="aligncenter size-full wp-image-2228" /></p>