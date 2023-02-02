import React from 'react';
import styles from './Buttons.module.scss'
import cn from 'classnames'
const Buttons = (props) => {
    const {children, primary = true, ghost, className, href} = props
    return ( href ?  <a href={href} className={cn(styles.buttons_default, className, {
          [styles.buttons_ghost]: ghost,
          [styles.buttons_primary]: primary
        })}>
          {children}
        </a>:
    <button className={cn(styles.buttons_default, className, {
      [styles.buttons_ghost]: ghost,
      [styles.buttons_primary]: primary
    })}>
      {children}
    </button>
    )
}
export default Buttons;