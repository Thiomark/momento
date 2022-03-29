import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const IconButton = ({name, x, type = 'ionicon', size = 30, color = 'white', event, customStyle = ''}) => {
    return (
        <TouchableOpacity style={tw`${x && 'pr-' + x} ${customStyle}`} onPress={event}>
            <Icon
                name={name}
                type={type}
                color={color}
                size={size}
            />
        </TouchableOpacity>
    )
}

export default IconButton