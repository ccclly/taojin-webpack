import ReactDOM from 'react-dom';
import Main from "./application/Main";
import './style.css'

function Content () {
  return (
    <div className={'CRX-content'} id={'edit-panel'}>
        <div id="line">a</div>
        <Main />
    </div>
  )
}

const app = document.createElement('div')
app.id = 'CRX-container'

document.body.appendChild(app)

ReactDOM.render(<Content />, app)

//  笔记区域默认宽度
const RightWidth = 400;

var oRoot = document.getElementsByTagName('html')[0],
  oLeft = document.getElementsByTagName('body')[0],
  oRight = document.getElementById('edit-panel'),
  oLine = document.getElementById('line');

window.onload = function () {
  // 分隔条被点击
  oLine.onmousedown = handleLineMouseDown;
};
oRight.style.width = RightWidth
oLeft.style.width = window.innerWidth - RightWidth + 'px'
// 分隔条操作
function handleLineMouseDown(e) {
  console.log('执行鼠标事件')
  // 鼠标移动（节流，100ms）
  document.onmousemove = throttle(function (e) {
    oLeft.style.width = parseInt(e.clientX)  + 'px';
    oRight.style.width = parseInt(window.innerWidth) - parseInt(e.clientX) + 'px';
  }, 100)

  // 鼠标放开的时候取消操作
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
}

function throttle(fun, delay) {
  let last, deferTimer
  return function (args) {
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    }else {
      last = now
      fun.apply(that,_args)
    }
  }
}
