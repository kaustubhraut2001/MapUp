import React from 'react';
import { Select, Button, Space } from 'antd';

const { Option } = Select;

const FormInput = ({ regions, selectedRegion, handleRegionChange, handleLoadClick }) => {
  return (
    <Space>
      <Select
        value={selectedRegion}
        style={{ width: 200 }}
        onChange={handleRegionChange}
      >
        {regions.map((region) => (
          <Option key={region.value} value={region.value}>{region.label}</Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleLoadClick}>Load</Button>
    </Space>
  );
};

export default FormInput;
