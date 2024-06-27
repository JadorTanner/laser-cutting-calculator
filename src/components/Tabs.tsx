import { useState } from "react";

interface TabProps<T> {
  label: string;
  value: T;
  children: React.ReactNode;
}

interface TabsProps<T> {
  tabs: TabProps<T>[];
  defaultValue: T;
  onChange?: (value: T) => void;
}

const Tabs: <T>(props: TabsProps<T>) => JSX.Element = ({
  tabs,
  defaultValue,
  onChange,
}) => {
  const [activeTabValue, setActiveTabValue] = useState(defaultValue);

  const handleTabChange = (value: any) => {
    setActiveTabValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-wrap -mb-4 w-fit">
      <div className="flex flex-wrap w-fit">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={`py-2 px-4 border-b-2 ${
              activeTabValue === tab.value
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => handleTabChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-2 w-fit">
        {/* {tabs.filter((t) => t.value == activeTab)[0].children} */}
        {tabs.map((tab) => (
          <div className={`${tab.value != activeTabValue ? "hidden" : ""}`}>
            {tab.children}
          </div>
        ))}
        {/* {tabs.find((tab) => tab.value === activeTab)?.children} */}
      </div>
    </div>
  );
};

export default Tabs;
