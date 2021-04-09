import DataSource from "./source";
import Vue from "vue";

const withSubscription = (component, selectData) => {
  const inheritedProps = component.props || [];
  return Vue.component("withSubscription", {
    render(h) {
      return h(component, {
        props: {
          ...inheritedProps,
          data: this.fetchedData,
        },
        on: { ...this.$listeners },
      });
    },
    props: [...inheritedProps],
    data() {
      return {
        fetchedData: null,
      };
    },
    methods: {
      handleChange() {
        this.fetchedData = selectData(DataSource, this.$props);
      },
    },
    mounted() {
      DataSource.addChangeListener(this.handleChange);
    },
    beforeDestroy() {
      DataSource.removeChangeListener(this.handleChange);
    },
  });
};

export default withSubscription;
