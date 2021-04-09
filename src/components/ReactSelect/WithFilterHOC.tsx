import React, {ReactElement} from 'react';
// @ts-ignore
import ReactSelect, { Props as ReactSelectProps} from "react-select";

type TProps = {
    enableFilter?: boolean,
    filteredOptions?: string[],
} & ReactSelectProps;

type Option = { value: string, label: string, data?: any }

export const WithFilterHOC = (props: TProps): ReactElement => {
    const filterOption = (option: Option, input: string): boolean => {
        if (input && !props.enableFilter) {
            return option.label.toLowerCase().includes(input.toLowerCase());
        }
        if (props.enableFilter) {
            return !props.filteredOptions?.includes(option.value)
                && option.label?.toLowerCase().includes(input.toLowerCase());
        }
    };

    return <ReactSelect {...props} filterOption={filterOption} />;
}

