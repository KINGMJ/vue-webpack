<template>
  <div>
    <!--后备内容-->
    <submit-button />
    <br /><br />
    <submit-button>确定</submit-button>

    <!--具名插槽-->
    <slot-panel>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </slot-panel>

    <!--作用域插槽-->
    <current-user v-slot="{ user }"> {{ user.firstName }}</current-user>
  </div>
</template>

<script>
import SubmitButton from '@/components/slot-demo/SubmitButton.vue'
import CurrentUser from '@/components/slot-demo/CurrentUser.vue'
import SlotPanel from '@/components/slot-demo/SlotPanel.vue'
export default {
  name: 'Demo41',
  components: {
    CurrentUser,
    SubmitButton,
    SlotPanel
  }
}
</script>
