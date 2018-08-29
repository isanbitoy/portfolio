<template>
  <div>

    <div class="filter-buttons">
      <button v-on:click="filter('all')">all</button>
      <button v-on:click="filter('tag1')">tag 1</button>
    </div>

	  <div class="grid-container">
      <div class="portfolio-content" v-for="content in filteredContents" v-bind:key="id">
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
              tags: ['all', 'tag1']
        	},
        	{ 
          		id: 1,
          		img: 'logo.png', 
          		title: 'Sample_2', 
          		desc: 'this is just sample 2',
              tags: ['all', 'tag2'] 
        	},
        	{ 
          		id: 2,
          		img: 'logo.png', 
          		title: 'Sample_3', 
          		desc: 'this is just sample 3',
              tags: ['all', 'tag1'] 
        	},
        	{ 
          		id: 3,
          		img: 'logo.png', 
          		title: 'Sample_4', 
          		desc: 'this is just sample 4',
              tags: ['all', 'tag2']
        	},
        	{ 
          		id: 4,
          		img: 'logo.png', 
          		title: 'Sample_5', 
          		desc: 'this is just sample 5',
              tags: ['all', 'tag1'] 
        	},
          { 
              id: 5,
              img: 'logo.png', 
              title: 'Sample_6', 
              desc: 'this is just sample 5',
              tags: ['all', 'tag1'] 
          },
          { 
              id: 6,
              img: 'logo.png', 
              title: 'Sample_7', 
              desc: 'this is just sample 5',
              tags: ['all', 'tag1'] 
          }
      		],
          currentTag: 'all',
		}
	},
  computed: {
    filteredContents: function() {
      const filter = this.currentTag;
      return this.contents.filter(function(item) {
          return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    filter: function(tag) {
      this.currentTag = tag;
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
.filter-buttons {
    margin-bottom: 15px;
}
</style>