export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

export const getUserRole = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    return decoded.access;
  } catch (error) {
    return error;
  }
};
