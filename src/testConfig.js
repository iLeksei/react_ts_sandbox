const {configure} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const {enableFetchMocks} =  require('jest-fetch-mock');

configure({ adapter: new Adapter() });
enableFetchMocks();