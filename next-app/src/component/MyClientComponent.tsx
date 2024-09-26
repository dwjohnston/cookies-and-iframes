
"use client"
import React, { useEffect, useRef, useState } from 'react';

export type MyClientComponentProps = {
    path: string; 

}

export const MyClientComponent = (props: MyClientComponentProps) => {

    const [data, setData] = useState(null);

    const hasFetchedRef = useRef(false);


    useEffect(() => {
        if(hasFetchedRef.current) return;
        fetch(props.path).then(v => v.json()).then(v => setData(v));
        hasFetchedRef.current = true
    }, [])
    
    return <div><p>I am a client component</p>
    
        <p>data: {JSON.stringify(data)}</p>
    </div>
}