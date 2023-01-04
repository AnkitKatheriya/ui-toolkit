import React from 'react'
import { createRoot } from 'react-dom/client'

// import { Button } from '@ui.toolkit/react'
// import '@ui.toolkit/scss/publish/css/Button.css'
import { ColorBlock } from '@ui.toolkit/react'
import '@ui.toolkit/scss/publish/css/Utilities.css'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)
// root.render(<Button label="Isolated Button"/>)
root.render(<ColorBlock hexColor='#000' width='lg' height='xlg' />)
