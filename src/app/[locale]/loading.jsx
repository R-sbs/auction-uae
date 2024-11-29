'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display : 'block',
    margin : '40vh auto',
    textAlign: 'center',
    
}

const loading = ( {loading}) => {
  return (
    <ClipLoader 
    color="#1F51FF"
    loading = { loading }
    cssOverride={override}
    size={100}
    aria-label= "Loading Spinner"
    />
  ) }

export default loading