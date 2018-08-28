<template>
	<div class="grid-container">
      <div class="portfolio" v-for="content in contents" v-bind:key="id">
        <img v-bind:src="require('../assets/images/' + content.img)" />
        <h3>{{ content.title }}</h3>
        <p>{{ content.desc }}</p>
      </div> 
    </div>
</template>

<script>
export default {
	data() {
		return {
			contents: [
        	{ 
          		id: 0,
          		img: 'logo.png', 
          		title: 'Sample_1', 
          		desc: 'this is just sample 1' 
        	},
        	{ 
          		id: 1,
          		img: 'logo.png', 
          		title: 'Sample_2', 
          		desc: 'this is just sample 2' 
        	},
        	{ 
          		id: 2,
          		img: 'logo.png', 
          		title: 'Sample_3', 
          		desc: 'this is just sample 3' 
        	},
        	{ 
          		id: 3,
          		img: 'logo.png', 
          		title: 'Sample_4', 
          		desc: 'this is just sample 4' 
        	},
        	{ 
          		id: 4,
          		img: 'logo.png', 
          		title: 'Sample_5', 
          		desc: 'this is just sample 5' 
        	}
      		]
		}
	}
}
</script>

<style>
.grind-container {
    display: grid;
    grid-gap: 5px;
}
</style>