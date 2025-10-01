const produtos = [
  { id: 1, nome: 'Notebook Gamer', categoria: 'Eletrônicos', preco: 4500 },
  { id: 2, nome: 'Cadeira de Escritório', categoria: 'Móveis', preco: 1200 },
  { id: 3, nome: 'Mouse sem fio', categoria: 'Eletrônicos', preco: 150 },
  { id: 4, nome: 'Mesa de Jantar', categoria: 'Móveis', preco: 2500 },
  { id: 5, nome: 'Teclado Mecânico', categoria: 'Eletrônicos', preco: 450 }
];

const container = document.getElementById("container-produtos");

function renderizarProdutos(produtosParaRenderizar) {
  const htmlProdutos = produtosParaRenderizar.map(produto => {
    return `
      <div class="produto">
        <h2>${produto.nome}</h2>
        <p>Categoria: ${produto.categoria}</p>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      </div>
    `;
  });
  container.innerHTML = htmlProdutos.join("");
}

// Renderização inicial
renderizarProdutos(produtos);

const form = document.getElementById("form-busca");
const campoBusca = document.getElementById("campo-busca");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const textoBusca = campoBusca.value.toLowerCase();
  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(textoBusca)
  );
  renderizarProdutos(produtosFiltrados);
});
