"use client";

import { useGetTeam } from "@/queries/group";

import { PcMemberCard, MobileMemberCard } from "./MemberCard";

interface TeamMemberListProps {
  isAdmin: boolean;
  groupId: number;
}

export default function TeamMemberList({
  isAdmin,
  groupId,
}: TeamMemberListProps) {
  const { data } = useGetTeam(groupId);

  const teamMembers = data?.members || [];
  const numberOfMembers = teamMembers.length;

  return (
    <>
      <h2 className="mb-4 flex items-center justify-between pc:mb-5">
        <div className="text-[18px]/[19px] font-semibold text-default-light">
          멤버
          <span className="lg-normal ml-2 text-default-light opacity-80">
            {`(${numberOfMembers}명)`}
          </span>
        </div>
        {isAdmin && (
          <button className="md-medium text-brand-active">
            + 새로운 멤버 초대하기
          </button>
        )}
      </h2>
      <div className="pc-and-tablet-grid hidden grid-cols-3 gap-6 tab:grid">
        {teamMembers.map((member) => (
          <PcMemberCard key={member.userEmail} member={member} />
        ))}
      </div>
      <div className="mobile-grid grid grid-cols-2 gap-6 tab:hidden">
        {teamMembers.map((member) => (
          <MobileMemberCard key={member.userEmail} member={member} />
        ))}
      </div>
    </>
  );
}
