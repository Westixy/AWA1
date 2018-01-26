import React from 'react'
import { Animate } from 'react-move'

const getXY = (ratio, rayon) => ({
  x: Math.round(Math.cos(Math.PI * 2 * (ratio - 0.25)) * rayon) + rayon,
  y: Math.round(Math.sin(Math.PI * 2 * (ratio - 0.25)) * rayon) + rayon,
})

const nums = {
  min: 0,
  max: 65,
  btnr: 60,
  duration: 300,
}

const getRatio = d => d / nums.max

export default class BtnGrower extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          position: 'relative',
          height: 0,
          width: 0,
          overflow: 'visible',
        }}
      >
        <Animate
          start={{ d: this.props.d }}
          update={{ d: [this.props.d], timing: { duration: nums.duration } }}
        >
          {({ d }) => (
            <div
              style={{
                position: 'absolute',
                borderRadius: d,
                top: -d,
                left: -d,
                bottom: -d,
                right: -d,
                opacity: getRatio(d),
                display: d === 0 ? 'none' : 'block',
              }}
            >
              {this.props.subButtons.map((elem, index) => {
                let btnr = nums.btnr
                let { x, y } = getXY(index / this.props.subButtons.length, d)
                return (
                  <div
                    key={index}
                    className="brightenOnHover"
                    onClick={e => {
                      e.stopPropagation()
                      elem.click() 
                    }}
                    style={{
                      zIndex: this.props.zindex || 0,
                      position: 'absolute',
                      left: x - btnr / 2,
                      top: y - btnr / 2,
                      width: btnr,
                      height: btnr,
                      borderRadius: btnr / 2,
                      backgroundColor: this.props.btnColor,
                      display: 'flex',
                      color: this.props.iconColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    {elem.elem}
                  </div>
                )
              })}
            </div>
          )}
        </Animate>
      </div>
    )
  }
}
