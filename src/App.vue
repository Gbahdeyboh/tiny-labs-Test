<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="css">
#app{
    height: 100%;
    font-family: 'Roboto', sans-serif;
}
</style>

<script type="text/javascript">
    export default {
        data(){
            return {
                window: {
                    width: 0,
                    height: 0
                }
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            // Makes sure <html> and <body> have a height of 100% always 
            document.querySelector('html').style.height = '100%';
            document.querySelector('body').style.height = '100%';
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            // Make resizing of the webpage sleek
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }
        }
    }
</script>