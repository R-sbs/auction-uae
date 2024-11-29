'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display : 'block',
    margin : '40vh auto',
    textAlign: 'center',
    
}

const Spinner = ( {loading}) => {
  return (
    <ClipLoader 
    color="#b89551"
    loading = { loading }
    cssOverride={override}
    size={100}
    aria-label= "Loading Spinner"
    />
  ) }

export default Spinner