<script >
import srcData from '@/data.json'

export default {
  data () {
    return {
      srcData: srcData,
      threads: srcData.threads,
      post: srcData.posts,
      users: srcData.users
    }
  },
  methods: {
    postById (postId) {
      return this.post.find(p => p.id === postId)
    },
    userById (userid) {
      return this.users.find(u => u.id === userid)
    }
  }
}

</script>

<template>
  <div>Hello from homepage</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
    <h1>{{ userById(thread.userId).name }}</h1>
      <p>{{ postById(postId).text }}</p>
    </div>

  </div>
</template>

<style lang="scss" scoped></style>
