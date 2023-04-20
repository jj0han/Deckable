import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Pencil = ({ iconColor = "#292929" }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
        >
            <Path
                fill={iconColor}
                d="M12.578.583a.788.788 0 0 0-.56.232l-1.351 1.352 3.166 3.166 1.352-1.351a.79.79 0 0 0 0-1.12L13.137.815a.788.788 0 0 0-.56-.232zM9.479 3.354.375 12.458v3.167h3.167l9.104-9.104-3.167-3.167z"
            />
        </Svg>
    )
}

export default Pencil