<template>
  <div>
    <div class="button-group">
      <button class="button" v-bind:class="[key===filterOption? 'is-checked' : '']" v-for="(key, value) in option.getFilterData" @click="filter(key)">{{ key }}</button>
    </div>
	  <div class="grid-container">
      <div class="portfolio-content" v-for="content in contents" v-bind:key="id">
        <img class="img"v-bind:src="require('../assets/images/' + content.img)" />
        <h3 class="title">{{ content.title }}</h3>
        <p class="desc">{{ content.desc }}</p>
      </div> 
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
          		desc: 'this is just sample 1',
              category: ''
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
      		],
          selected: null,
          filterOption: 'show all',
          option: {
            itemSelector: '',
            getFilterData: {
              "show all": function() {
                return true;
              },
            }
          },
          methods: {
            filter: function(key) {
              this.isotopeFilter(key);
              this.filterOption = key;
            }
          }
		}
	}
}
</script>

<style>
.grid-container { 
    display: grid;
    grid-gap: 6px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    grid-auto-flow: dense;
}
.portfolio-content {
	background: #d3d3d3;
}
</style>