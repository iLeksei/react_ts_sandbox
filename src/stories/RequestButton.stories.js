import React from 'react';
import { storiesOf } from '@storybook/react';
import {JsonLoader} from "../hooks_demo/JsonLoader";
import {RequestButton} from "../hooks_demo/RequestButton";
import {PreloaderButton} from "../hooks_demo/PreloaderButton";

storiesOf("Buttons", module)
    .add('Blocked button during request', () => <RequestButton />)
    .add("Blocked 10s Button after request and countdown", () => <PreloaderButton/>)