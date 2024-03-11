import {Image} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomepageCard() {
    const [photoSrc, setPhotoSrc] = useState('')

    useEffect(() => {
        const getPhotoSrc = async() => {
            const response = await axios.get("https://rickandmortyapi.com/api/character/265");
            setPhotoSrc(response.data.image);
        }
        getPhotoSrc();
    },[])

    return (
        <Image src={photoSrc} alt='Pickle Rick' thumbnail className='p-16'/>
    )
}