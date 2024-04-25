'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Excalidraw = dynamic(() => import('@excalidraw/excalidraw'), {
  ssr: false,
  loadableGenerated: {
    webpack: () => ['@excalidraw/excalidraw'],
    modules: ['@excalidraw/excalidraw'],
  },
})

function Page() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>For System Design Interviews</h1>
      <div style={{ height: '100vh' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Excalidraw />
        </Suspense>
      </div>
    </>
  )
}

export default Page