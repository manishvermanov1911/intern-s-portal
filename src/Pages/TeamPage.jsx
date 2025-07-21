import TeamPageD from "../Components/TeamPageD";
import { useParams } from "react-router-dom";

import teamTimelineInfo from "../Data/teamTimelineInfo.json";

export const TeamPage = ({ interns }) => {
  const params = useParams();

  // params.name is one of ["Workfront", "AEM", "Data", "UI", "UX", "CJM"]

  const teamName = params.name;
  if (
    !teamName ||
    !["workfront", "aem", "data", "ui", "ux", "cjm"].includes(teamName)
  ) {
    // TODO: return 404 page
    return <div className="text-white p-10">Team not found.</div>;
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
    <TeamPageD
      team={team}
      teamMembers={teamData}
      timelineImage={teamTimelineInfo[team].desktop}
      teamDescription={teamTimelineInfo[team].description}
    />
  );
};
