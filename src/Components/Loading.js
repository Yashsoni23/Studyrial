import React from 'react'

const Loading = () => {
  return (
    <>
        <div className="img flex w-screen h-screen bg-loadBlack justify-center items-center absolute">
            <img src="/spiraload.gif" className="w-[15rem] h-[15rem]" alt="" />
        </div>
    </>
  )
}

export default Loading