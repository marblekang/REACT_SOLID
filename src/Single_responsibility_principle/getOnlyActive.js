export const getOnlyActive = (users) => {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  return users.filter(
    (user) => !user.isBanned && user.lastActivityAt >= weekAgo
  );
};
