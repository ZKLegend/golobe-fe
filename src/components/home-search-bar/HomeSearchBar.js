import { Tabs } from "antd";
import { Button, Row, Col, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsSearch } from "../../redux/selecterSlice";

import { BedIcon, PlaneIcon } from "../../assets/icon-components/IconComponent";
import FlightSearchInput from "../flight-search-input/FlightSearchInput";
import StaySearch from "../search-tab/StaySearch";
import "./home-search-bar.css";

const HomeSearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    dispatch(setIsSearch(true));
    navigate("/flight/list");
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="label">
          <PlaneIcon />
          <h4 className="montserrat-semibold-16px">Flight</h4>
        </div>
      ),
      children: (
        <Form style={{ marginTop: "30px" }}>
          <Row gutter={[16, 24]}>
            <FlightSearchInput />
            <Col span={4} offset={17}>
              <div>
                <Button className="hidden-button" type="link">
                  <PlusOutlined />
                  Add Promo Code
                </Button>
              </div>
            </Col>
            <Col span={3}>
              <div className="show-result-button-container">
                <Button className="large-button" onClick={handleNavigate}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.46858 13.9999H8.49983C8.65427 14.0008 8.80542 13.9552 8.9336 13.8691C9.06178 13.7829 9.16108 13.6602 9.21858 13.5168L9.19666 13.5085L9.19674 13.5083C9.14098 13.6472 9.04474 13.7661 8.92052 13.8496C8.79624 13.9331 8.64971 13.9774 8.49996 13.9765H8.49983H8.4691M8.46858 13.9999L8.46963 13.9765C8.46945 13.9765 8.46928 13.9765 8.4691 13.9765M8.46858 13.9999V13.9765H8.4691M8.46858 13.9999L8.4691 13.9765M8.4691 13.9765C8.17379 13.963 7.92874 13.7657 7.83168 13.4845L7.83151 13.484C7.82949 13.4786 7.82777 13.4734 7.82603 13.4676L7.82617 13.4675L7.82513 13.4651L5.99283 9.17318C5.96895 9.09376 5.9662 9.00949 5.98487 8.92868C6.00363 8.84747 6.04336 8.7726 6.1001 8.71155L8.4691 13.9765ZM13.7645 0.236791C13.8636 0.33626 13.9317 0.462305 13.9607 0.599682C13.9896 0.737059 13.9781 0.879884 13.9276 1.01088L13.9276 1.01102L9.19683 13.5081L6.10012 8.71152L12.5164 1.82901C12.5165 1.82891 12.5166 1.82882 12.5167 1.82872C12.5393 1.80608 12.5572 1.77924 12.5694 1.74972C12.5817 1.72007 12.588 1.68829 12.588 1.65619C12.588 1.62409 12.5817 1.59231 12.5694 1.56266C12.5571 1.533 12.5391 1.50606 12.5164 1.48337C12.4937 1.46067 12.4668 1.44267 12.4371 1.43038C12.4075 1.4181 12.3757 1.41178 12.3436 1.41178C12.3115 1.41178 12.2797 1.4181 12.25 1.43038C12.2205 1.44261 12.1937 1.46051 12.1711 1.48307C12.171 1.48317 12.1709 1.48327 12.1708 1.48337L5.28512 7.89933C5.22406 7.95608 5.14918 7.99582 5.06797 8.01458C4.98716 8.03325 4.90288 8.03051 4.82347 8.00663L0.534033 6.17495L0.534076 6.17485L0.531912 6.17416L0.519453 6.17021C0.519391 6.17019 0.519329 6.17017 0.519268 6.17015C0.377472 6.12266 0.25378 6.03258 0.165074 5.91219C0.0763296 5.79175 0.0269276 5.64685 0.0236156 5.49728C0.0203037 5.34771 0.0632432 5.20077 0.14657 5.07652C0.228717 4.95403 0.346169 4.85948 0.483266 4.80537V4.80625L0.491562 4.80311L12.9925 0.0715461L12.9925 0.0715329C13.1235 0.0217435 13.266 0.0108564 13.4029 0.0401821C13.5399 0.0695044 13.6654 0.13778 13.7645 0.236791ZM13.7645 0.236791C13.7645 0.236803 13.7645 0.236814 13.7645 0.236826L13.7811 0.220251L13.7645 0.236791Z"
                      fill="black"
                      stroke="#112211"
                      strokeWidth="0.046875"
                    />
                  </svg>
                  <span>Show Flights</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      ),
    },
    {
      key: "2",
      label: (
        <div className="label">
          <BedIcon />
          <h4 className="montserrat-semibold-16px">Stay</h4>
        </div>
      ),
      children: <StaySearch />,
    },
  ];
  return (
    <div className="HomeSearchBar">
      <Tabs
        defaultActiveKey="2"
        items={items}
        onChange={onChange}
        tabBarGutter="50px"
      />
    </div>
  );
};
export default HomeSearchBar;
