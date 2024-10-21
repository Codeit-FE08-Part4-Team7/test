export interface AcceptInvitationResponse {
  groupId: number;
}

interface Member {
  role: "ADMIN" | "MEMBER";
  userImage: string | null;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
}

interface Task {
  displayIndex: number;
  groupId: number;
  updatedAt: string;
  createdAt: string;
  name: string;
  id: number;
  tasks: string[];
}

export interface GetTeamResponse {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
  members: Member[];
  taskLists: Task[];
}

export interface AddTeamResponse {
  name: string;
  image: string;
  updatedAt: string;
  createdAt: string;
  id: number;
}

export type GetTeamMemberResponse = Member;
