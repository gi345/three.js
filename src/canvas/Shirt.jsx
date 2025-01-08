/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { state } from '../store';

export const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('./shirt_baked.glb');

    const logoTexture = useTexture(snap.logoDecal || 'default-logo-texture.jpg');
    const fullTexture = useTexture(snap.fullDecal || 'default-full-texture.jpg');

    logoTexture.anisotropy = 16;
    fullTexture.anisotropy = 16;

    useFrame((state, delta) => {
        console.log("Current Shirt Color:", snap.color);
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    });

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-round={1}
                dispose={null}
            >
                {snap.isFullTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                )}
                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0.04, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    );
};


