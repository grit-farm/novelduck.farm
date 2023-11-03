'use client'

import { Suspense, useState } from 'react'
import Logo from '@/app/_components/molecules/Logo'
import NavMobile from '@/app/_components/molecules/Nav/NavMobile'
import NavPc from '@/app/_components/molecules/Nav/NavPc'
import NavContainer from '@/app/_components/molecules/Nav/NavContainer'
import MetaInfo from '../atoms/MetaInfo'

function Headers() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Suspense>
        <MetaInfo />
      </Suspense>
      <NavContainer>
        <Logo />
        <NavMobile handleToggle={handleToggle} />
        <NavPc toggle={toggle} handleToggle={handleToggle} />
      </NavContainer>
    </>
  )
}

export default Headers
