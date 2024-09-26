
"use client"
import React, { useEffect, useState } from 'react';

export type MyClientComponentProps = {
    path: string; 

}

export const MyClientComponent = (props: MyClientComponentProps) => {

    const [data, setData] = useState(null);


    useEffect(() => {
        fetch(props.path).then(v => v.json()).then(v => setData(v));
    }, [])
    
    return <div><p>I am a client component</p>
    
        <p>data: {JSON.stringify(data)}</p>
    </div>
}