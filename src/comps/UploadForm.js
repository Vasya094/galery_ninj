import React, {useState, useEffect} from 'react'

import ProgressBar from './ProgressBar.js'

export default function UploadForm() {
  const [ file, setFile ] = useState( null )
  const [ error, setError ] = useState( null )
  const [ description, setDescription ] = useState( '' )
  const [ text, setText ] = useState( '' )
  const types = [ "image/jpeg", "image/png" ]
  
  const changeHandler = e => {
    let selected = e.target.files[ 0 ]
    if ( selected && types.includes(selected.type))
    {
      setFile(selected)
      setError( '' )
      setText(description)
      setDescription('')
    } else
    {
      setFile( null )
      setError( 'Please select an image file (png or jpeg)' )
      setDescription('')
    }
  }
  
  return (
    <form>
      <div className='inp-stl'>
      <label htmlFor="decrip">Image description: </label>
      <input required={true} id="decrip" type="text" value={description} onChange={e => setDescription(e.target.value)}/>
      <input type="file" onChange={changeHandler} />
      </div>
      <div className="output">
        {
          error && <div className="error">{error}</div>
        }
        {
          file  && <ProgressBar file={file} description={text} setFile={setFile} />
        }
      </div>
    </form>
  )
}
