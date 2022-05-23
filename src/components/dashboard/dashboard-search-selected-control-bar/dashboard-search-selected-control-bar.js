/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - dashboard search selected control bar component.
 */

// Core dependencies
import React, { useContext } from "react";

// App dependencies
import ContextDashboard from "../context-dashboard/context-dashboard";
import DashboardSearchSelectedFacets from "../dashboard-search-selected-facets/dashboard-search-selected-facets";

// Styles
import * as compStyles from "./dashboard-search-selected-control-bar.module.css";

function DashboardSearchSelectedControlBar() {
  const {
    onHandleClearAll,
    onHandleClearFacet,
    onHandleClearTerm,
    selectedTermOperatorsByFacetName,
  } = useContext(ContextDashboard);
  const showController = selectedTermOperatorsByFacetName.size > 0;

  return (
    <div className={compStyles.controlBar}>
      {showController ? (
        <DashboardSearchSelectedFacets
          onHandleClearAll={onHandleClearAll}
          onHandleClearFacet={onHandleClearFacet}
          onHandleClearTerm={onHandleClearTerm}
          selectedTermOperatorsByFacetName={selectedTermOperatorsByFacetName}
        />
      ) : (
        <span>No selected terms.</span>
      )}
    </div>
  );
}

export default DashboardSearchSelectedControlBar;
