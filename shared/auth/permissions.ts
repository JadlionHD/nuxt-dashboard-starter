import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc, userAc } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  course: ["create", "read", "update", "delete"]
} as const;

export const ac = createAccessControl(statement);

export const user = ac.newRole({
  course: ["read"],
  ...userAc.statements
});

export const admin = ac.newRole({
  course: ["create", "update", "delete", "read"],
  ...adminAc.statements
});
