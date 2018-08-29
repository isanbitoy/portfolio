<template>
  <section id="app" class="app-wrapper">
    <h1 class="portfolio-title">PORTFOLIO</h1>
    <div class="portfolio-div-line"></div>
    <portfolio-panel></portfolio-panel>
  </section>
</template>

<style>
h1, h2 {
    font-weight: normal;
}
a {
    color: #42b983;
}
.app-wrapper {
    font-family: 'Helvetica' sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 1.5em 5% 0px 5%;
}
.portfolio-title {
    font-size: 2.0em;
    display: flex;
    justify-content: flex-start;
    color: #a6a6a6;
}
.portfolio-div-line {
    position: relative;
}
.portfolio-div-line::after {
    position: absolute;
    content: '';
    background: #d3d3d3;
    bottom: 1em;
    left: 0;
    height: 3px;
    width: 100%;
}
</style>
