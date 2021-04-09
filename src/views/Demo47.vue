<template>
  <div>
    <button @click="deleteTag">删除标签</button>
    <tags-list :tags="tags" />
  </div>
</template>

<script>
import TagsList from "../components/demo47/TagsList.vue";
var g_board = {
  tags: [],
};
g_board.tags = [
  {
    tag_code: "B4",
    color_code: "A1",
    tag_name: "5",
  },
  {
    tag_code: "C5",
    color_code: "A1",
    tag_name: "4",
  },
  {
    tag_code: "H7",
    color_code: "A1",
    tag_name: "3",
  },
  {
    tag_code: "B5",
    color_code: "A1",
    tag_name: "2",
  },
  {
    tag_code: "B9",
    color_code: "A1",
    tag_name: "1",
  },
];

export default {
  components: { TagsList },
  name: "Demo47",
  data() {
    return {
      tags: g_board.tags,
    };
  },
  methods: {
    deleteTag() {
      g_board.tags.forEach((item, index) => {
        if (item.tag_code == "B9") {
          g_board.tags.splice(index, 1);
        }
      });
    },
  },
};
</script>

<!--
由于数组直接赋值，相当与一个引用。所以对g_board的操作是响应式的
-->
