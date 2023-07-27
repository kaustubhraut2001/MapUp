import React from 'react';
import { Card } from 'antd';

const RegionInfo = ({ currency, speedUnits, distanceUnits, volumeUnits, timezones }) => {
  // Provide a default empty array if timezones are not available
  const timeZoneList = timezones || [];

  return (
    <Card title="Region Info">
      <p><b>Currency:</b> {currency}</p>
      <p><b>Speed Units:</b> {speedUnits}</p>
      <p><b>Distance Units:</b> {distanceUnits}</p>
      <p><b>Volume Units:</b> {volumeUnits}</p>
      <p><b>Timezones:</b> {timeZoneList.join(', ')}</p>
    </Card>
  );
};

export default RegionInfo;
