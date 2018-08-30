<template>
  <div>
    <div class="filter-buttons">
      <a class="topnav-item" v-on:click="shuffle"><span class="item">SHUFFLE</span></a>
      <a class="topnav-item" v-on:click="filter('all')"><span class="item">ALL</span></a>
      <a class="topnav-item" v-on:click="filter('tag1')"><span class="item">TAG 1</span></a>
    </div>

    <transition-group name="grid-content" class="grid-content" tag="section">
      <div class="item-content" v-for="content in filteredContents" v-bind:key="content.id">
        <img class="img"v-bind:src="require('../assets/images/' + content.img)" />
        <h3 class="title">{{ content.title }}</h3>
        <p class="desc">{{ content.desc }}</p>
      </div> 
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash'
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
    },
    shuffle: function() {
      this.contents = _.shuffle(this.contents)
    }
  }
}
</script>

<style>
.filter-buttons {
    margin-bottom: 15px;
}
.topnav-item {
  display: inline-flex;
  color: #A6A6A6;
  text-align: center;
  justify-content: center;
  padding: 18px 20px;
  text-decoration: none;
  font-size: 24px;
}
.topnav-item:hover {
  color: #333;
}
.item {
  position: relative;
  cursor: pointer;
}
.item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom;
  transition: transform 0.25s ease-out;
}
.item:hover::after {
  background-color: #333;
  transform: scaleX(1);
  transform-origin: bottom center;
}
.grid-content { 
    display: grid;
    grid-gap: 6px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    grid-auto-flow: dense;
    transition: all;
}
.item-content {
	  background: #d3d3d3;
}
.grid-content-enter-active, .grid-content-leave-active {
    transition: opacity 0.5s ease-out;
}
.grid-content-enter, .grid-content-leave-to {
    opacity: 0;
}
</style>