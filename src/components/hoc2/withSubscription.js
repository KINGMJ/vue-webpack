import Vue from "vue";

const withSubscription = (component) => {
  const inheritedProps = component.props || [];
  return Vue.component("withSubscription", {
    render(h) {
      return h(component, {
        props: {
          ...this.$props,
          data: this.fetchedData,
        },
        on: { ...this.$listeners },
        scopedSlots: this.$scopedSlots,
        atrrs: this.$attrs,
      });
    },
    props: [...inheritedProps],
    data() {
      return {
        fetchedData: "HOC中的数据",
      };
    },
  });
};

export default withSubscription;
