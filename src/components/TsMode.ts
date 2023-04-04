import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'TsMode',
  setup() {
    return () => h(
      'div',
      {
        style: {
          width: '120px',
          height: '120px',
          backgroundColor: 'green'
        },
        onContextmenu: (event: Event) => {
          event.preventDefault()
          alert(2)
        }
      },
      'TsMode'
    )
  }
})