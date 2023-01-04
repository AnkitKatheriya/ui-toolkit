import React from 'react'
import { createRoot } from 'react-dom/client'

import { Button } from '@ui.toolkit/react'
import '@ui.toolkit/scss/publish/css/Button.css'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)
root.render(<Button label="Isolated Button"/>)
