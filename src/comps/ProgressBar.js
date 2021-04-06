import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ( { file, setFile, description } ) => {
  debugger
  const {url, progress} = useStorage(file, description)
  console.log( url, progress )
  useEffect(() => {
    if ( url )
    {
      setFile(null) 
    }
  }, [url, setFile])
  return (
    <div className="progress-bar"
    style={{width: progress + "%",}}
    ></div>
  )
}

export default ProgressBar