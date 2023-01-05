import React from 'react'
import { Spacing } from '@ui.toolkit/foundation'

interface ColorBlockProps {
    hexColor: string,
    width?: keyof typeof Spacing,
    height?: keyof typeof Spacing
}

const ColorBlock: React.FC<ColorBlockProps> = ({ hexColor, width = Spacing.md, height = Spacing.md }) => {
    
    const className = `ui-toolkit-width-${width} ui-toolkit-height-${height}`
    return (
        <div className={className} style={{
                backgroundColor: hexColor
            }}
        >
        </div>
    )
}

export default ColorBlock