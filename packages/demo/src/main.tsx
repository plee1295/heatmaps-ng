import React from 'react'
import ReactDOM from 'react-dom'
import { createHeatmap } from 'api'

const container = document.createElement('div')
document.body.appendChild(container)

createHeatmap(container, { radius: 25 })
    .then(hm => {
        hm.setData([{ x: 50, y: 50, value: 1 }])
    })
