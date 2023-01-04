import React from 'react'
import Spacings from '../../foundation/Spacings'

interface ColorBlockProps {
    hexColor: string,
    width?: keyof typeof Spacings,
    height?: keyof typeof Spacings
}

const ColorBlock: React.FC<ColorBlockProps> = ({ hexColor, width = Spacings.md, height = Spacings.md }) => {
    
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