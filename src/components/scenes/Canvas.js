'use client'
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { memo } from 'react';

const Scene = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            className=''

        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sparkles
                count={1500}
                size={3}
                scale={[20, 20, 20]}
                speed={0.5}
                opacity={1}
                color={'#f9f9f9'}
                noise={0.1}
            />
        </Canvas>
    );
};

export const SceneMemo = memo(Scene);
SceneMemo.displayName = 'SceneMemo';