// const daynight = document.querySelector('.day-night');
// daynight.addEventListener('click', () => {
//   daynight.querySelector('i').classList.toggle('fa-sun');
//   daynight.querySelector('i').classList.toggle('fa-moon');
//   document.body.classList.toggle('dark');
// });
// window.addEventListener('load', () => {
//   if (document.body.classList.contains('dark')) {
//     daynight.querySelector('i').classList.add('fa-sun');
//   } else {
//     daynight.querySelector('i').classList.add('fa-moon');
//   }
// });
var vue = new Vue({
  el: '#app',
  data() {
    return {
      today: false,
      tab: true,
      activeItem: 'home'
    };
  },
  methods: {
    hamtoday() {
      this.today = !this.today;
    },
    hamtab() {
      this.tab = !this.tab;
      console.log(this.tab);
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  },
  
});
