/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { Shirt } from "./Shirt";
import { Backdrop } from './Backdrop';
import { CameraRig } from './CameraRig';

export const CanvasModel = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height
                width: '100vw', // Full viewport width
                backgroundColor: '#f5f5f5', // Optional background
            }}
        >
            <Canvas
                shadows
                camera={{ position: [0, 0, 2], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
                className='w-full max-w-full h-full transition-all ease-in' // Move camera forward
            >
                <ambientLight intensity={0.5} />
                <Environment preset="city" />
                <CameraRig>
                    <Backdrop />
                    <Center>
                        <Shirt />
                    </Center>
                </CameraRig>
            </Canvas>
        </div>
    );
};
