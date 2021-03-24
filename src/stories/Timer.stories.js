import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from "@storybook/addon-knobs";

import {Timer} from "../components/Timer/Timer";
import {StoryContainer} from "./StoryContainer";

storiesOf("Timer", module)
    .addDecorator(withKnobs)
    .addDecorator((Story) => <StoryContainer><Story/></StoryContainer>)
    .add('Timer from props.start to zero', () => <Timer start={number("start", 10)} />)