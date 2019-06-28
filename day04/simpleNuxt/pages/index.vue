<template>
  <div>
    <!-- {{ $store.state.posts }} -->

    <!-- {{ posts }} -->

    <Post v-for="post in posts" :image='post.image' :title='post.title' :likes='post.likes' ></Post>
    <!-- <nuxt-link to='/about'>LINK</nuxt-link> -->


    <hr>  
    <input type="text" placeholder="image" v-model="form.image">  <br>
    <input type="text" placeholder="text" v-model="form.title">  <br>
    <button @click='saveNewPost()'>SAVE</button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Post from '~/components/post.vue'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      form: {
        title:'',
        image:'' 
      }  
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  },
  components: {
    Post
  },
  methods: {
    saveNewPost() {
      this.$store.dispatch('savePost',{
        title: this.form.title,
        image: this.form.image
      })
      this.form.title = ''
      this.form.image = ''
    }
  }

}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
