import React from 'react'
import { Spacing } from '@ui.toolkit/foundation'

interface ImageProps {
    imageUrl: string,
    width: keyof typeof Spacing,
    height: keyof typeof Spacing,
    altText: string
}

const Image: React.FC<ImageProps> = (props): React.ReactElement => {
    const { imageUrl, width, height, altText } = props
    return <img
                src={imageUrl}
                width={width || Spacing.md}
                height={height || Spacing.md}
                alt={altText}
            />
}

export default Image