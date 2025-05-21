import { memo } from 'react';
import { SceneMemo } from '@/components/scenes/Canvas'

const WrapperScene = ({ children }) => {
    return (
        <div className="relative min-h-screen h-full w-full
        bg-[#0a0a0a] ">
            <div className="absolute inset-0 z-0">
                <SceneMemo />
            </div>
            <div className="absolute inset-0 z-10">
                {children}
            </div>
        </div>
    );
};

export const WrapperSceneMemo = memo(WrapperScene);
WrapperSceneMemo.displayName = 'WrapperSceneMemo';