import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainLayout from './Component/Layout';
import FormInput from './Component/FormInput';
import RegionInfo from './Component/RegionInfo';
import Map from './Component/Map';

const regions = [
    { label: 'United States', value: 'us' },
    { label: 'India', value: 'in' },
    { label: 'United Kingdom', value: 'uk' },
];
// we can use API to fetch latitude and longitude of a region
// as i ahve given static longitude and latitude of a region here
const fetchRegionInfo = (region) => {

    if (region === 'us') {
        return {
            currency: 'USD',
            speedUnits: 'mph',
            distanceUnits: 'miles',
            volumeUnits: 'gallons',
            timezones: ['America/New_York', 'America/Chicago', 'America/Los_Angeles'],
        };
    } else if (region === 'in') {
        return {
            currency: 'INR',
            speedUnits: 'km/h',
            distanceUnits: 'kilometers',
            volumeUnits: 'liters',
            timezones: ['Asia/Kolkata'],
        };
    } else if (region === 'uk') {
        return {
            currency: 'GBP',
            speedUnits: 'mph',
            distanceUnits: 'miles',
            volumeUnits: 'liters',
            timezones: ['Europe/London'],
        };
    }
};

const App = () => {
    const [coordinates, setCoordinates] = React.useState([37.7749, -122.4194]); // Example coordinates for San Francisco
    const [regionInfo, setRegionInfo] = React.useState({});

    const handleRegionChange = (value) => {

        if (value === 'us') {
            setCoordinates([37.7749, -122.4194]);
        } else if (value === 'in') {
            setCoordinates([19.0760, 72.8777]);
        } else if (value === 'uk') {
            setCoordinates([51.5074, -0.1278]);
        }


        const info = fetchRegionInfo(value);
        setRegionInfo(info);
    };

    return ( <
        Provider store = { store } >
        <
        MainLayout >
        <
        FormInput regions = { regions }
        handleRegionChange = { handleRegionChange }
        /> <
        Map coordinates = { coordinates }
        /> <
        RegionInfo currency = { regionInfo.currency }
        speedUnits = { regionInfo.speedUnits }
        distanceUnits = { regionInfo.distanceUnits }
        volumeUnits = { regionInfo.volumeUnits }
        timezones = { regionInfo.timezones }
        /> <
        /MainLayout> <
        /Provider>
    );
};

export default App;