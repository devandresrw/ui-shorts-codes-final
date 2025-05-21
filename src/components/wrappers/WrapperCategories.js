import { memo } from 'react';

const WrapperCategories = ({ children }) => {
    return (
        <div className="w-full max-h-[400px] overflow-y-auto p-2 flex
        flex-col gap-5">
            {children}
        </div>
    );
};

export const WrapperCategoriesMemo = memo(WrapperCategories);
WrapperCategoriesMemo.displayName = 'WrapperCategoriesMemo';