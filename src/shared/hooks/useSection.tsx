import React from "react";

type SectionType = "home" | "addTimezone";

const SectionContext = React.createContext<{
  section: SectionType;
  updateSection: (section: SectionType) => void;
} | null>(null);

const useSection = () => React.useContext(SectionContext);

function SectionProvider(props: {
  defaultSection?: "home";
  children: JSX.Element | JSX.Element[];
}) {
  const { defaultSection = "home", ...rest } = props;
  const [section, setSection] = React.useState<SectionType>(defaultSection);
  const updateSection = (section: SectionType) => setSection(section);
  return (
    <SectionContext.Provider value={{ section, updateSection }} {...rest} />
  );
}

export { SectionProvider, useSection };
