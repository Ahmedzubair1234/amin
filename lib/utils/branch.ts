export const VALID_BRANCHES = ["kushtia", "jhineidah"] as const;

export type BranchName = (typeof VALID_BRANCHES)[number];

export function isBranchValid(branch: string): branch is BranchName {
  return VALID_BRANCHES.includes(branch as BranchName);
}

export function getBranchName(branch: string): string {
  return branch.charAt(0).toUpperCase() + branch.slice(1);
}