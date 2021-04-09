<template>
  <div>
    <blog-post :id="1" @click="onClick" title="这是一个title" />
    <!-- <comments-list /> -->
  </div>
</template>

<script>
// import CommentsList from "../components/hoc/CommentsList.vue";
import BlogPost from "../components/hoc/BlogPost.vue";
import withSubscription from "../components/hoc/withSubscription";

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => {
    return DataSource.getBlogPost(props.id);
  }
);
// const CommentsListWithSubscription = withSubscription(
//   CommentsList,
//   (DataSource) => DataSource.getComments()
// );
export default {
  name: "app",
  components: {
    "blog-post": BlogPostWithSubscription,
    // "comments-list": CommentsListWithSubscription,
  },
  methods: {
    onClick(msg) {
      alert(msg);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,
h2 {
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
</style>
