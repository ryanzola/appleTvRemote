import './import-jquery';

export default () => {
  console.log('hej världen');
};

document.addEventListener('mousemove', event =>{
  let card_x = getTransformValue(event.clientX, window.innerWidth, 50);
  let card_y = getTransformValue(event.clientY, window.innerHeight, 50);
  $('.floating').css('transform', `rotateX(${card_y}deg) rotateY(${card_x}deg)`);
  $('.bottom-row').css('transform', `rotateX(${card_y / 2}deg) rotateY(${card_x / 2}deg)`);
  $('.floating').css('box-shadow', `${-card_x}px ${card_y}px 55px rgba(0, 0, 0, 0.55)`);
  // $('.button').css('background', `linear-gradient(${(-(event.screenX + event.screenY)/4) + 96}deg, #a2a2a2, #393939 50%)`);
});
function getTransformValue(v1,v2,value) {
  return ((v1/v2*value-value/2)*1).toFixed(1);
}