import { PropsWithChildren, useState } from "react";
import { Button } from "@/components/button";
import { Toggle } from "@/components/toggle";
import { Input } from "@/components/input";

type Props = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

type SpanProps = {
  index: number;
  text: string;
  isActive: number;
};

const tabs = ["Tab 1", "Tab 2", "Tab 3"];
const spans = [
  {
    text: "Span 1",
    children: (
      <>
        <Toggle />
        <Input />
        <Button text="submit" />
      </>
    ),
  },
  {
    text: "Span 2",
  },
  {
    text: "Span 3",
  },
];

const Tab = ({ text, isActive, onClick }: Props) => {
  return (
    <a
      className={
        isActive
          ? "tab tab-bordered border-b-2 tab-active text-text-base"
          : "tab tab-bordered border-b-2 text-text-base"
      }
      onClick={onClick}
    >
      {text}
    </a>
  );
};

const Span = ({ index, isActive, children }: PropsWithChildren & SpanProps) => {
  return (
    <div
      className={
        isActive == index
          ? "flex flex-col min-h-16 text-text-base"
          : "flex-col min-h-16 text-text-base hidden"
      }
    >
      {children}
    </div>
  );
};

export const Tabs = () => {
  const [isActive, setActive] = useState(0);

  return (
    <div>
      <div className="tabs mt-4 w-full h-8 border-b border-stroke mb-8">
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            text={tab}
            isActive={index == isActive}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
      {spans.map((span, index) => (
        <Span key={index} index={index} text={span.text} isActive={isActive}>
          {span.children ?? <span>No children to show</span>}
        </Span>
      ))}
    </div>
  );
};
