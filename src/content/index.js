import ReactDOM from 'react-dom';
import Main from "./application/Main";
import './style.css'

function Content () {
  return (
    <div className={'CRX-content'}>
      <div className="content-entry"></div>
      <div className="edit-panel">
        <Main />
      </div>
    </div>
  )
}

const app = document.createElement('div')
app.id = 'CRX-container'

document.body.appendChild(app)

ReactDOM.render(<Content />, app)
