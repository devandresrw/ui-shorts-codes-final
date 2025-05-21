import { memo } from 'react';

const TitleMachine = ({ title }) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export const TitleMachineMemo = memo(TitleMachine);
TitleMachineMemo.displayName = 'TitleMachineMemo';