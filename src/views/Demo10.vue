<template>
  <div>
    <h1>Latest Vue.js Commits</h1>
    <template v-for="branch in branches">
      <input :id="branch" :value="branch" v-model="currentBranch" title="" name="branch" type="radio" />
      <label :for="branch">{{ branch }}</label>
    </template>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
      <li v-for="record in commits">
        <a href="record.html_url" target="_blank" class="commit">
          {{ record.sha.slice(0, 7) }}
        </a>
        - <span class="message">{{ record.commit.message | truncate }}</span
        ><br />
        by
        <span class="author">
          <a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a>
        </span>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='
export default {
  name: 'Demo10',
  filters: {
    truncate: v => {
      const newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: v => {
      return v.replace(/T|Z/g, ' ')
    }
  },
  data: () => {
    return {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    }
  },
  watch: {
    currentBranch: 'fetchData'
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      const xhr = new XMLHttpRequest()
      const self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function() {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #f66;
}

li {
  line-height: 1.5em;
  margin-bottom: 20px;
}

.author,
.date {
  font-weight: bold;
}
</style>
