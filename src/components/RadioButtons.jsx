/* eslint-disable react/prop-types */
import { Radio, ConfigProvider } from "antd";
import styles from "./RadioButtons.module.css";

function RadioButtons({
  onFilterChange,
  options,
  defaultValue = "all",
  value,
  className = "",
}) {
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

  function handleFilterOptionChange(e) {
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
        className={`${styles.radioButtons} ${className}`.trim()}
        options={filterOptions}
        defaultValue={defaultValue}
        value={value}
        optionType="button"
        onChange={handleFilterOptionChange}
      />
    </ConfigProvider>
  );
}
export default RadioButtons;
