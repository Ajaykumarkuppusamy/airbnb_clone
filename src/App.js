import React, { useState } from 'react';
import { Button, Modal, Form, DatePicker, Slider, Checkbox, Menu, Dropdown } from 'antd';
import { MenuOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import imageData from './imageData';
import './App.css';
import View from './View';
import logo from './im/logo.png';
import searchIcon from './im/white-search-icon-png-25.png';
import globe from './im/globe.jpg';

const { RangePicker } = DatePicker;

const locations = ['Bangalore, India', 'Mumbai, India', 'Delhi, India', 'Goa, India', 'Jaipur, India'];

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(imageData);
  const [checkedValues, setCheckedValues] = useState([]);
  const onChange = (checkedValues) => {
    setCheckedValues(checkedValues);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
    const filteredResults = imageData.filter((item) => {
      return (
        (values.location.length === 0 || values.location.includes(item.location)) &&
        item.startDate >= values.dateRange[0] &&
        item.endDate <= values.dateRange[1] &&
        item.priceRange >= values.priceRange[0] &&
        item.priceRange <= values.priceRange[1]
      );
    });
    console.log(filteredResults);
    setFilteredData(filteredResults);
    console.log(filteredData);
    setIsModalVisible(false);
  };



  return (
    <div className="App">
      <div className="navbar">
        <a className="navbar-brand" href="/">
          <img className="App-logo" src={logo} alt="Logo" />
          <h2 className="red">AjAv bnb</h2>
        </a>
        <div className="options">
          <button className="btn">Any week</button>
          <button className="btn btn-search">
            Add guests
          </button>
          <button className="filter-btn btn" onClick={showModal}>
            Filter <MenuOutlined />
          </button>
        </div>

        <div className="profile-section">
          <Button className="btn" type="text">
            AjAv your Home
          </Button>
          <Button className="btn" type="text">
            <img src={globe} className="globe" alt="globe" />
          </Button>
          <Button className="btn" type="text">
            <MenuOutlined />
          </Button>
          <Button className="btn" type="text">
            <UserOutlined />
          </Button>
        </div>
      </div>
      <div><h2>Check out the filter!!!!!</h2></div>
      <div className="amenities-section">
        {filteredData.map((item) => (
          <View key={item.id} imageData={item} />
        ))}
      </div>
      <Modal title="Filter Properties" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form name="filterForm" onFinish={onFinish}>
          <Form.Item label="Location" name="location">
            <Checkbox.Group
              options={locations}
              value={checkedValues}
              onChange={onChange}
            ><Button>
                Select Locations <DownOutlined />
              </Button>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="Date Range" name="dateRange">
            <RangePicker />
          </Form.Item>
          <Form.Item label="Price Range" name="priceRange" initialValue={[5000, 10000]}>
            <Slider range min={0} max={15000} step={1000} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Apply Filters
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
