import { useState } from 'react'
import { useSelector } from 'react-redux'
import { product_navigation } from '../constant'
import { classNames } from '../utils/function'

const useLanding = (otherData) => {

  const isLoggedIn = useSelector(({ userData }) => userData?.isLogged)
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(false)

  return { open, setOpen, handleClick, classNames, product_navigation, isLoggedIn }
}

export default useLanding