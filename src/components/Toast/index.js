import ToastComponent from './toast.vue'
const mergeOptions = function ($vm, options) {
  const defaults = {}
  for (let i in $vm.$options.props) {
    defaults[i] = $vm.$options.props[i].default
  }

  const _options = Object.assign({}, defaults, options)
  for (let i in _options) {
    $vm[i] = _options[i]
  }
}

let $vm
let timer
const plugin = {
  install(vue, options = {}) {
    const Toast = vue.extend(ToastComponent)

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    const toast = (options) => {
      if (typeof options === 'string') {
        mergeOptions($vm, {
          text: options
        });
      } else if (typeof options === 'object') {
        mergeOptions($vm, options)
      }
      if (typeof options === 'object' && (options.onShow || options.onHide)) {
        options.onShow && options.onShow();
      }
      this.$watcher && this.$watcher();
      this.$watcher = $vm.$watch('show', (val) => {
        if (!val && options && options.onHide) {
          options.onHide();
        }
      })
      $vm.show = true;

      if (options.time !== 0) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          $vm.show = false;
        }, options.time || 1500)
      }
    }
    toast.hide = () => {
      $vm.show = false;
    }

    vue.$toast = toast

    vue.mixin({
      created: function () {
        this.$toast = vue.$toast;
      }
    })
  }
}

export default plugin
export const install = plugin.install