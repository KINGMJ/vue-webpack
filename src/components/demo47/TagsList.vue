<template>
  <div>
    <input type="text" v-model="filterTagKeyWord" />
    <ul>
      <li
        v-for="tag in displayedTags"
        :key="tag.tag_code"
        :class="`tag${tag.tag_code}`"
      >
        {{ tag.tag_name }}
      </li>
    </ul>

    <pre>
      {{ displayedTags }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "Demo47",
  props: ["tags"],
  data() {
    return {
      filterTagKeyWord: "",
    };
  },
  computed: {
    filteredTags() {
      return this.tags.filter(
        (o) => !!~o.tag_name.toLowerCase().indexOf(this.filterTagKeyWord.trim())
      );
    },
    displayedTags() {
      if (this.filterTagKeyWord !== "") {
        return this.filteredTags;
      }
      return this.tags;
    },
  },
  watch: {
    tags() {
      this.filterTagKeyWord = "";
    },
  },
};
</script>

<!--
-->
