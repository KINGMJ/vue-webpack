<script>
import UserPanel from '@/components/reusable-component/UserPanel.vue'

export default {
  name: 'UserPanel2',
  extends: UserPanel,
  data() {
    return {
      show: true
    }
  },
  methods: {
    showSelectMsg() {
      console.log('子类2勾选了成员')
    }
  }
}
</script>
