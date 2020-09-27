<template>
  <div class="card" style="width: 100%">
    <div class="card-body">
      <h6 class="card-title da-orcamento--title">Pedir Orçamento</h6>
      <b-form>
        <b-input
          class="da-orcamento-input"
          placeholder="Primeiro e Ultimo Nome"
        ></b-input>

        <b-input-group>
          <b-input class="da-orcamento-input" placeholder="Email"></b-input>
        </b-input-group>

        <b-input-group>
          <b-input class="da-orcamento-input" placeholder="Telemóvel"></b-input>
        </b-input-group>

        <b-input-group>
          <b-input
            class="da-orcamento-input"
            placeholder="Data do Evento"
          ></b-input>
        </b-input-group>

        <b-form-textarea
          class="da-orcamento-input"
          id="da-orcamento-textarea"
          placeholder="Mais detalhes..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-button class="btn-enviar-pedido" variant="primary"
          >Enviar Pedido</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PedirOrcamento',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.da-orcamento--title {
  font-weight: 600;
}

.btn-enviar-pedido {
  width: 100%;
}

.da-orcamento-input,
.btn-enviar-pedido {
  margin: 1.5% 0;
}

.btn-enviar-pedido {
  background-color: #2c3e50;
}

#da-orcamento-textarea {
  overflow-y: auto !important;
}
</style>
