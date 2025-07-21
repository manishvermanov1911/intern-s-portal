import TeamPageComponent from "../Components/TeamPageComponent";
import { useParams } from "react-router-dom";

import teamTimelineInfo from "../Data/teamTimelineInfo.json";
import NotFound from "./NotFound";

export const TeamPage = ({ interns }) => {
  const params = useParams();

  // params.name is one of ["Workfront", "AEM", "Data", "UI", "UX", "CJM"]

  const teamName = params.name;
  if (
    !teamName ||
    !["workfront", "aem", "data", "ui", "ux", "cjm"].includes(teamName)
  ) {
    return <NotFound />;
  }
  const paramToProperCase = {
    workfront: "Workfront",
    aem: "AEM",
    data: "Data",
    ui: "UI",
    ux: "UX",
    cjm: "CJM",
  };
  const team = paramToProperCase[teamName.toLowerCase()];
  const teamData = interns.filter((intern) => intern.competency === team);

  return (
    <TeamPageComponent
      team={team}
      teamMembers={teamData}
      timelineImage={teamTimelineInfo[team].desktop}
      teamDescription={teamTimelineInfo[team].description}
    />
  );
};
