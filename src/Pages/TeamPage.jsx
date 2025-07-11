import TeamPageD from "../Components/TeamPageD";
import TeamPageM from "../Components/TeamPageM";
import useIsMobile from "../Components/useIsMobile";
import teamData from "../Data/team";
export const TeamPage = ({ team = "UI" }) => {
  const isMobile = useIsMobile();
  const teamInfo = teamData[team] || {};

  return isMobile ? (
    <TeamPageM
      team={team}
      teamMembers={teamInfo.teamMembers}
      timelineData={teamInfo.timelineDataMobile}
    />
  ) : (
    <TeamPageD
      team={team}
      teamMembers={teamInfo.teamMembers}
      timelineData={teamInfo.timelineDataDesktop}
    />
  );
};
