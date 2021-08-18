/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL tabs component.
 */

// Core dependencies
/* TODO review eslint. */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from "@reach/router";
import React, { useEffect, useRef } from "react";

// App dependencies
import TabsFuzz from "./tabs-fuzz/tabs-fuzz";
import Tab, { ITab } from "./tab/tab";
import * as TabService from "../../utils/tab.service";

// Styles
import compStyles from "./tabs.module.css";

interface LocationState {
  scrollX: number;
}

interface TabsProps {
  tabs: ITab[];
}

function Tabs(props: TabsProps): JSX.Element | null {
  const { tabs } = props;
  const location = useLocation();
  const tabsRef = useRef<HTMLDivElement>(null);
  const state = location.state as LocationState;
  const { scrollX } = state;
  const showTabs = tabs && tabs.length > 0;

  useEffect(() => {
    /* Grab the tabs element. */
    /* Scroll tabs to nominated "x" scroll position (if required). */
    const tabsEl = tabsRef?.current as HTMLDivElement;
    TabService.scrollTabs(tabsEl, scrollX);
  }, [scrollX]);

  return showTabs ? (
    <>
      <div className={compStyles.tabs} ref={tabsRef}>
        {tabs.map((tab) => (
          <Tab key={tab.name} tab={tab} />
        ))}
      </div>
      <TabsFuzz />
    </>
  ) : null;
}

export default Tabs;
