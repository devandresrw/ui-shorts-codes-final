import { memo } from 'react';

const TitleMachine = ({ title }) => {
    return (
        <h2 className='glahs text-center fira-sans-bold text-4xl py-3
        '>{title}</h2>
    );
};

export const TitleMachineMemo = memo(TitleMachine);
TitleMachineMemo.displayName = 'TitleMachineMemo';