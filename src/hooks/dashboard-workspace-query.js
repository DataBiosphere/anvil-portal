import { useStaticQuery, graphql } from "gatsby";

export const DashboardWorkspaceStaticQuery = () => {
  const { allWorkspace } = useStaticQuery(
    graphql`
      query DashboardWorkspaceStaticQuery {
        allWorkspace {
          edges {
            node {
              accessType
              consentName {
                long
                short
              }
              consentShortName
              consortium
              createdAt
              dataTypes
              dataUseLimitations
              dataUseLimitationModifiers
              dbGapId
              dbGapIdAccession
              diseases
              diseaseSpecificDataUseLimitations
              gapId {
                studyUrl
                gapIdDisplay
              }
              projectId
              samples
              size
              studyName
              studyDesigns
              studySlug
              subjects
            }
          }
        }
      }
    `
  );
  return allWorkspace.edges.map((n) => n.node);
};
