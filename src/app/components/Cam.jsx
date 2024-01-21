import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

function Cam() {
    const webcamRef = useRef(null);

    useEffect(() => {
        const constraints = {
            video: true,
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                webcamRef.current.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing webcam:', error);
            });
    }, []);

    return (
        <div>
            <Webcam ref={webcamRef} />
        </div>
    );
}

export default Cam;
