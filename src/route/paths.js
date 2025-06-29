function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  landing: path(ROOTS_AUTH, "/landing"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  dashboard: ROOTS_DASHBOARD,
  leads: path(ROOTS_DASHBOARD, "/leads"),
};
