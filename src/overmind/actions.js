export const showHomePage = ({ state }) => {
  state.currentPage = "home";
};

export const showUsersPage = async ({ state, effects }) => {
  state.user = null;
  state.currentPage = "users";
  state.isLoadingUsers = true;
  const us2 = await effects.api.getUsers();
  console.log('action:showUsersPage got users:')
  console.dir(us2)
  state.users = us2

  state.isLoadingUsers = false;
};

export const showUserModal = async ({ value: params, state, effects }) => {
  state.isLoadingUserDetails = true;
  state.modalUser = await effects.api.getUserWithDetails(params.id);
  state.isLoadingUserDetails = false;
};
