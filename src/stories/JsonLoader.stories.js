import React from 'react';
import { storiesOf } from '@storybook/react';
import {JsonLoader} from "../hooks_demo/JsonLoader";
import {StoryContainer} from "./StoryContainer";

storiesOf("JsonLoader", module)
    .addDecorator((Story) => <StoryContainer>Story</StoryContainer>)
    .add('Getting json data from Jsonplaceholder service', () => <JsonLoader />)