import React from 'react'

interface HeadProps {
  title: string;
  description: string;
}

const Head = ({title, description} : HeadProps) => {

  React.useEffect(() => {
    const meta = document.querySelector("meta[name='description']")
    document.title = `${title} | Supreme Bank`;
    if(meta)
    meta.setAttribute('content', description || '')
  }, [description, title])

  return (
    <></>
  )
}

export default Head