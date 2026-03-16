<script lang="ts" setup>
interface Props {
  /**
   * The label of the button
   */
  label?: string
  /**
   * Whether the button is disabled
   */
   disabled?: boolean

}

interface Emits {
  /**
   * The click event
   */
  click:[]
  
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Click me',
  disabled: false,
})


const emit = defineEmits<Emits>()


</script>

<template>
  <button 
  :disabled="disabled"
  @click="emit('click')" class="btn" >
    {{ props.label }}
  </button>
</template>

<style scoped>
.btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #333;
  }
  &:active {
    background-color: #666;
  }
  &:focus {
    border: 2px solid #000;
    outline: none;
  }
}
</style>
