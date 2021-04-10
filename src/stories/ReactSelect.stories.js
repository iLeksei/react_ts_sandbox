import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

import {StoryContainer} from "./StoryContainer";
import {WithFilterHOC} from "../components/ReactSelect/WithFilterHOC";



const StoryBookHOC = (props) => {
    const [value, setValue] = useState();
    const options = [
        { value: "1", label: "one" },
        { value: "2", label: "two" },
        { value: "3", label: "three" },
    ];
    const onChange = (option) => {
        setValue(option);
        action("select");
    }
    return (<WithFilterHOC {...props} value={value} options={options} onChange={onChange} />);
}


storiesOf("ReactSelect HOC", module)
    .addDecorator(withKnobs)
    .addDecorator((Story) => <StoryContainer><Story/></StoryContainer>)
    .add('simple demo', () => <StoryBookHOC styles={{width: '200px !important'}}/>)