<template>
  <div class="da-header py-4">
    <div class="row px-5 align-items-center mr-0">
      <div class="col col-md-8 da-header--info">
        <h1 class="da-header--title">{{service.nome}}</h1>
        <div class="da-header--desc">
          <p>
            {{service.location}} |
            <span>{{service.fornecedor.telemovel}}</span>
          </p>
        </div>
      </div>
      <div class="col col-md-4 da-header--action">
        <div>
          <button class="btn mr-2">Solicitar</button>
          <button class="btn">Favorito</button>
        </div>
      </div>
    </div>
    <div
      class="da-header--options d-flex flex-row px-5 justify-content-start align-items-center"
    >
      <div class="da-header--options-item">
        <button class="btn">Pedir Orçamento</button>
      </div>
      <span class="da-header--vertical-item"> </span>
      <div class="da-header--options-item">
        <p>Rating</p>
        <p>{{service.classification}} de 5.0</p>
      </div>
      <span class="da-header--vertical-item"> </span>
      <div class="da-header--options-item">
        <p>Preços a partir de:</p>
        <p>{{service.price}} AKZ</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetalheServicoHeader',
  components: {},
  props:{
    service: {
      type:Object,
      default: function(){
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style scoped>
.da-header--info {
  text-align: left;
  font-size: 0.9rem;
}
.da-header--desc p:first-of-type span {
  font-weight: 600;
  cursor: pointer;
}

.da-header--action {
  text-align: right;
  font-size: 0.9rem;
}

.da-header--action button:first-of-type {
  background-color: rgba(255, 205, 3, 0.8);
}

.da-header--options-item {
  text-align: left;
  font-size: 0.9rem;
  margin-right: 5px;
  padding: 0 10px;
}

.da-header--options-item button {
  font-size: 0.9rem;
}

.da-header--vertical-item {
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.4);
}

.da-header--options-item:first-of-type {
  border-left: none;
}

.da-header--options-item:first-of-type {
  margin-left: 0;
  padding-left: 0;
}

.da-header--options-item button {
  background-color: #2c3e50;
  color: #fff;
}

.da-header--options-item p:first-of-type {
  font-weight: 600;
}

.da-header--options-item p {
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
}
</style>
