import Vue from 'vue'

const withSubscription = component => {
  const inheritedProps = component.props || []
  return Vue.component('withSubscription', {
    props: [...inheritedProps],
    data() {
      return {
        fetchedData: 'HOC中的数据'
      }
    },
    render(h) {
      return h(component, {
        props: {
          ...this.$props,
          data: this.fetchedData
        },
        on: { ...this.$listeners },
        scopedSlots: this.$scopedSlots,
        attrs: this.$attrs
      })
    }
  })
}

export default withSubscription
