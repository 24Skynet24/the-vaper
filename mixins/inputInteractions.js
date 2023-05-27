export default {
  methods: {
    invalidityInput($event) {
      $event.target.classList.toggle('validity')
    },

    phoneFilter(val){
      if (val.split(' ')[1] && val.split(' ')[2]) {
        let arr = [val.split(' ')[1], val.split(' ')[2]]
        let tel = arr[0].substring(1).slice(0, -1)
        for (let i of arr[1].split('-')) tel += i

        return '7' + tel
      }
    }
  }
}
