/* eslint-disable react/prop-types */
import { Radio, ConfigProvider } from "antd";

function RadioButtons({ onFilterChange }) {
  const options = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Type 1",
      value: "type-1",
    },
    {
      label: "Type 2",
      value: "type-2",
    },
    {
      label: "Type 3",
      value: "type-3",
    },
  ];

  function handleChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            colorPrimary: "#ff6600",
            colorPrimaryHover: "#ff6600",
          },
        },
      }}
    >
      <Radio.Group
        block
        options={options}
        defaultValue="All"
        optionType="button"
        onChange={handleChange}
      />
    </ConfigProvider>
  );
}
export default RadioButtons;
