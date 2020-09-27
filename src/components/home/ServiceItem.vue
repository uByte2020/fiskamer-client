<template>
  <div class="card-carousel--card">
    <img src="https://placehold.it/200x200" />
    <div class="card-carousel--card--footer">
      <p class="card-carousel--category">{{ service.category }}</p>
      <p class="card-carousel--name">{{ service.name }}</p>
      <p class="card-carousel--localizacao">{{ service.localizacao }}</p>
      <p class="card-carousel--preco">
        {{ service.preco }} {{ service.moeda }}
      </p>
      <!-- <p class="tag">
        {{ service.tag }}
      </p> -->
      <div class="card-carousel--description">
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    msg: String,
    service: {
      name: String,
      category: String,
      localizacao: String,
      preco: Number,
      description: String,
      tage: String,
      moeda: String,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-carousel--card {
  margin: 0 1%;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
  flex-grow: 1;
  min-width: 32%;
  padding-bottom: 15px;
}
.card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-carousel--card--footer .card-carousel--category {
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
}

.card-carousel--card--footer .card-carousel--name {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-transform: capitalize;
}
.card-carousel--card--footer .card-carousel--localizacao {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.8);
  text-transform: capitalize;
}

.card-carousel--card--footer .card-carousel--preco {
  font-size: 1.3rem;
  color: #ffcd03;
  font-weight: 600;
}

.card-carousel--card--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-carousel--card--footer p.tag:before {
  content: '';
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0;
}
.card-carousel--card--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}
.card-carousel--card--footer p.tag.secondary:before {
  display: none !important;
}
.card-carousel--card--footer p.tag:after {
  content: '';
  position: absolute;
  top: 8px;
  left: -3px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: 0px 0px 0px #004977;
}

.card-carousel--card--footer .card-carousel--description {
  height: 99px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-carousel--card--footer .card-carousel--description p {
  font-size: 0.8rem;
  text-align: justify;
  height: 100%;
}

@media (min-width: 1281px) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .card-carousel--card {
    min-width: 50%;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .card-carousel--card {
    min-width: 100%;
  }
}

@media (max-width: 320px) {
  .card-carousel--card {
    min-width: 100%;
  }
}
</style>
