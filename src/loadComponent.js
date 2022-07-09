import { defineAsyncComponent } from 'vue'
export default function ({ component }) {
  const components = import.meta.glob('./components/*.vue')
  return defineAsyncComponent(components[`./components/${component}.vue`])
}
