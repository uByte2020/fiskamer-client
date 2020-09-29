<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-4">
          <img src="@/assets/imgs/salao.jpg" class="img-fluid img" alt="" />
        </div>
        <div class="col-6 col-sm-8" id="conteudo">
          <h3>Lorem Ipsum</h3>
          <h6>Classificação</h6>
          <p id="texto">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
          </p>
          <div id="botao">
            <button type="button" class="btn btn-link icones">
              <b-icon icon="suit-heart"></b-icon>
            </button>
            <button type="buttom" class="btn btn-danger">Orçamento</button>
            <button type="buttom" class="btn btn-danger">Solicitar</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#botao {
  float: right;
  margin-right: 5px;
  margin-top: 4px;
}
.icones {
  font-size: 18px;
  margin-right: 5px;
  color: black;
}
.btn {
  margin: 5px;
}
p {
  text-align: left;
  font-size: 0.9rem;
}

h3,
h6 {
  text-align: left;
}
</style>