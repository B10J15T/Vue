import Vue from 'vue'
const filter=Vue.filter('upcase',function (v) {
  return v.toUpperCase()
});

export {filter,

}
