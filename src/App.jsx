import React, { Component } from 'react'
import logo from './logo.svg'
import BtnGrow from './btnGrow'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      d: 0,
    }
  }

  handleGrowBtnClick() {
    this.setState({ d: this.state.d === 0 ? 65 : 0 })
  }

  handleSubButtonClick(data) {
    this.handleGrowBtnClick()
    alert(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          <button
            className="btnGrow__container"
            onClick={() => this.handleGrowBtnClick()}
          >
            <div
              style={{
                position: 'absolute',
                marginLeft: 15,
                marginTop: 6,
              }}
            >
              <BtnGrow
                iconColor="#f7f7f7"
                btnColor="#0977d4"
                d={this.state.d}
                subButtons={[
                  {
                    elem: <div>Sub 0</div>,
                    click: () => this.handleSubButtonClick('sub0'),
                  },
                  {
                    elem: <div>Sub 1</div>,
                    click: () => this.handleSubButtonClick('sub1'),
                  },
                  {
                    elem: <div>Sub 2</div>,
                    click: () => this.handleSubButtonClick('sub2'),
                  },
                  {
                    elem: <div>Sub 3</div>,
                    click: () => this.handleSubButtonClick('sub3'),
                  },
                  {
                    elem: <div>Sub 4</div>,
                    click: () => this.handleSubButtonClick('sub4'),
                  },
                ]}
              />
            </div>
            Grow
          </button>
        </p>
      </div>
    )
  }
}

export default App
