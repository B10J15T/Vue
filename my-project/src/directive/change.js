import Vue from 'vue';
const changeColor = Vue.directive('changeColor', function (el, binding) {
  el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  el.style.fontSize = binding.value.font;
  if (binding.arg === 'ita') {
    el.style.fontStyle = 'italic';
  } else if (binding.arg === 'bold') {
    el.style.fontWeight = 'bold';
  }
});
const changeText = Vue.directive('changText', function (el, binding) {
  el.innerText = '新闻总揽';
  el.style.fontSize = binding.value.font;
  el.style.color = 'white';
});
export {
  changeColor,
  changeText,
};
