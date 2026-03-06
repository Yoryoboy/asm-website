/* eslint-disable react/prop-types */
import { Radio, ConfigProvider } from "antd";

function RadioButtons({ onFilterChange, options, defaultValue = "all" }) {
  const filterOptions =
    options ??
    [
      {
        label: "All",
        value: "all",
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
        options={filterOptions}
        defaultValue={defaultValue}
        optionType="button"
        onChange={handleChange}
      />
    </ConfigProvider>
  );
}
export default RadioButtons;
