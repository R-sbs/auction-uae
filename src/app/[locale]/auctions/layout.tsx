'use client';
import React, { ReactNode } from 'react'

type Tchild = {
    children: ReactNode;
}

const auctionslayout = ({children } : Tchild ) => {
  return (
    <div className='mx-auto bg-slate-300'>
        {children}
    </div>
  )
}

export default auctionslayout