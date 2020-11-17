<template>
  <div class="da-home-category mt-5">
    <div class="container">
      <div class="row justify-content-md-center my-2">
        <div v-for="category in categories" :key="category._id" class="category-item mx-2 col col-lg-1">
          <span v-show="!category.hasImage" class="h1 category-item--icon">
            <b-icon icon="person-plus-fill" class="rounded"></b-icon></span>
          <p class="category-item--description">{{category.category}}</p>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <button class="btn">Organize o seu Evento</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    msg: String,
  },
  data:()=>{
    return{
      categories:[
        {
          _id:1,
          category: 'DJ',
          icon:'',
          image:'',
          hasImage:false
        },
        {
          _id:2,
          category: 'Bebidas',
          icon:'',
          image:'',
          hasImage:false
        },
        {
          _id:3,
          category: 'Salão',
          icon:'',
          image:'',
          hasImage:false
        },
        {
          _id:4,
          category: 'Decoração',
          icon:'',
          image:'',
          hasImage:false
        },
        {
          _id:5,
          category: 'Buffê',
          icon:'',
          image:'',
          hasImage:false
        },
        {
          _id:6,
          category: 'Fotografo',
          icon:'',
          image:'',
          hasImage:false
        },
        {
          _id:7,
          category: 'Noiva',
          icon:'',
          image:'',
          hasImage:false
        },
      ]
    }
  }
}
</script>

<style scoped>
.da-home-category button {
  background-color: #ffcd03;
  color: #2c3e50;
}
.category-item{
cursor: pointer;
text-align: center;
}
</style>
