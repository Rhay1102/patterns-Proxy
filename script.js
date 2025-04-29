const produto = {
    nome: '',
    preco: 0
  };
  
  const proxyProduto = new Proxy(produto, {
    get(target, prop) {
      console.log(`Propriedade acessada: ${prop}`);
      return target[prop];
    },
    set(target, prop, value) {
      if (prop === 'preco' && value < 0) {
        alert('Preço não pode ser negativo!');
        return false;
      }
      target[prop] = value;
      console.log(`Propriedade "${prop}" atualizada para: ${value}`);
      return true;
    }
  });
  
  document.getElementById('formProduto').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
  
    proxyProduto.nome = nome;
    proxyProduto.preco = preco;
  
    document.getElementById('resultado').textContent =
      `Produto: ${proxyProduto.nome} | Preço: R$ ${proxyProduto.preco.toFixed(2)}`;
  });
  