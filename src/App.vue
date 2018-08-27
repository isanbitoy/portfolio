<template>
  <main id="app" class="portfolio-wrapper">

    <div class="grid-container">
      <div class="portfolio" v-for="content in contents" v-bind:key="id">
        <img v-bind:src="content.img" />
        <h3>{{ content.title }}</h3>
        <p>{{ content.desc }}</p>
      </div> 
    </div> 
    
  </main>
</template>

<script>
export default {
  data () {
    return {
      contents: [
        { 
          id: 0,
          img: './src/assets/images/logo.png', 
          title: 'Sample_1', 
          desc: 'this is just sample 1' 
        },
        { 
          id: 1,
          img: './src/assets/images/logo.png', 
          title: 'Sample_2', 
          desc: 'this is just sample 2' 
        },
        { 
          id: 2,
          img: './src/assets/images/logo.png', 
          title: 'Sample_3', 
          desc: 'this is just sample 3' 
        },
        { 
          id: 3,
          img: './src/assets/images/logo.png', 
          title: 'Sample_4', 
          desc: 'this is just sample 4' 
        },
        { 
          id: 4,
          img: './src/assets/images/logo.png', 
          title: 'Sample_5', 
          desc: 'this is just sample 5' 
        }
      ]
    }
  }
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px 125px 0px 125px;
}
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.grind-container {
    display: grid;
    grid-gap: 5px;
}
</style>
