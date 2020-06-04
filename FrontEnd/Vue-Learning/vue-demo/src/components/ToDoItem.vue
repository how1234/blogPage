<template>
    <div>
        <slot name="pre-icon" :value="value"></slot>
        <span v-if="!deleted"> {{ title }}</span>
        <span v-else style="text-decoration: line-through">{{ title }}</span>
        <slot name="suf-icon" :value="value"></slot>
        <button @click="handleClick" v-show="!deleted">delete</button>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    deleted: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      value: Math.random()
    };
  },

  methods: {
    handleClick() {
      this.$emit("deleted", "hi");
    }
  }
};
</script>
