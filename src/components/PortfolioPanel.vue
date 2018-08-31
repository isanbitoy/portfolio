<template>
  <div class="portfolio-wrapper">

  	<h1 class="portfolio-title">PORTFOLIO</h1>
    <div class="portfolio-div-line"></div>

    <div class="portfolio-buttons">
      <a class="panel-item" v-on:click="shuffle"><span class="item fa fa-random"></span></a>
      <a class="panel-item" v-on:click="filter('all')"><span class="item">All</span></a>
      <a class="panel-item" v-on:click="filter('tag1')"><span class="item">TAG 1</span></a>
      <a class="panel-item" v-on:click="filter('tag2')"><span class="item">TAG 2</span></a>
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
              tags: ['all', 'tag2']
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
.portfolio-wrapper {
	  width: 100%;
	  height: 100%;
}
.portfolio-title {
    font-size: 2.0em;
    display: flex;
    justify-content: flex-start;
    color: #a6a6a6;
    margin: 0;
}
.portfolio-div-line {
    position: relative;
}
.portfolio-div-line::after {
    position: absolute;
    content: '';
    background: #d3d3d3;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
}
.portfolio-buttons {
	margin: 10px 0px 10px 0px;
}
.panel-item {
	  display: inline-flex;
	  color: #A6A6A6;
	  text-align: center;
	  justify-content: center;
	  padding: 18px 20px;
	  text-decoration: none;
	  font-size: 20px;
}
.panel-item:hover {
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
}
.grid-content-enter-active, .grid-content-leave-active {
    transition: all 1.0s ease;
}
.grid-content-enter, .grid-content-leave-to {
    opacity: 0;
}
.item-content {
	  background: #d3d3d3;
    transition: all 0.8s ease;
}
</style>