import { useState, useEffect } from "react";
import { projectFirestore, projectStorage,timestamp } from "../firebase/config";


const useStorage = ( file, description ) => {
  debugger
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [ url, setUrl ] = useState( null )

  useEffect( () => {
    

    const storageRef = projectStorage.ref( file.name )
    const collectionRef = projectFirestore.collection( 'images')
    storageRef.put( file ).on( 'state_changed', ( snap ) => {
      debugger
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, ( err ) => {
      setError(err)
    }, async () => {
      const url = await storageRef.getDownloadURL()
      const createdAt = timestamp()
      //const {description} = file

      collectionRef.add({url, createdAt, description})
      setUrl(url)
    })
  }, [ file, description ] )
  return {progress,
    error,
    url}
}

export default useStorage