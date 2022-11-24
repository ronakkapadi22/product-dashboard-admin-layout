import { useState } from 'react'
import { product_navigation } from '../constant'
import { classNames } from '../utils/function'

const useLanding = (otherData) => {

    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(false)

  return { open, setOpen, handleClick, classNames, product_navigation }
}

export default useLanding