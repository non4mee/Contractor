import React from 'react'

import MainIcon from '../icons/MainIcon'
import SearchIcon from '../icons/SearchIcon'
import ProfileIcon from '../icons/ProfileIcon'

function Icon({ style, color, name, size, ...rest}) {
  switch (name) {
    case 'main-icon':
      return (
        <MainIcon
          style={style}
          color={color}
          size={size}
          {...rest}
        />
      )
    case 'search-icon':
      return (
        <SearchIcon
          style={style}
          color={color}
          size={size}
          {...rest}
        />
      )
    case 'profile-icon':
      return (
        <ProfileIcon
          style={style}
          color={color}
          size={size}
          {...rest}
        />
      )
    default:
    return null
  }
}

export default Icon
