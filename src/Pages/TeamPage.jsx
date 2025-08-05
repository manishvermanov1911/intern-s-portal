import TeamPageComponent from "../Components/TeamPageComponent";
import { useParams } from "react-router-dom";

import teamTimelineInfo from "../Data/teamTimelineInfo.json";
import NotFound from "./NotFound";

export const TeamPage = ({ interns }) => {
  const params = useParams();
  const teamName = params.name.toLowerCase();

  const validTeams = Object.keys(teamTimelineInfo).map((key) => key.toLowerCase());

  if (!teamName || !validTeams.includes(teamName)) {
    return <NotFound />;
  }

  const team = Object.keys(teamTimelineInfo).find(
    (key) => key.toLowerCase() === teamName
  );

  const teamData = interns.filter((intern) => intern.competency.toLowerCase() === teamName);

  const formatTeamName = (name) => {
    if (name.toUpperCase() === "SCOE") return "SCoE";
    return name;
  };

  const hideTimeline = team.toLowerCase() === "scoe";

  return (
    <TeamPageComponent
      team={formatTeamName(team)}
      teamMembers={teamData}
      timelineImage={teamTimelineInfo[team].desktop}
      teamMobileImage={teamTimelineInfo[team].mobile}
      teamDescription={teamTimelineInfo[team].description}
      hideTimeline={hideTimeline}
    />
  );
};
