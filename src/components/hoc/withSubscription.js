import DataSource from './source'
import Vue from 'vue'

const withSubscription = (component, selectData) => {
  const inheritedProps = component.props || []
  return Vue.component('withSubscription', {
    props: [...inheritedProps],
    data() {
      return {
        fetchedData: null
      }
    },
    mounted() {
      DataSource.addChangeListener(this.handleChange)
    },
    beforeDestroy() {
      DataSource.removeChangeListener(this.handleChange)
    },
    methods: {
      handleChange() {
        this.fetchedData = selectData(DataSource, this.$props)
      }
    },
    render(h) {
      return h(component, {
        props: {
          ...inheritedProps,
          data: this.fetchedData
        },
        on: { ...this.$listeners }
      })
    }
  })
}

export default withSubscription
