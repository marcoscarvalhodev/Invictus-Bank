import React from 'react'

const useRefs = () => {
  const refsByKey = React.useRef<Record<string,HTMLElement | null>>({})

  const setRef = (element: HTMLElement | null, key: string) => {
    refsByKey.current[key] = element;
  }

  return {refsByKey: refsByKey.current, setRef};
}

export default useRefs