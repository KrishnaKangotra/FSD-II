const users = [
  {
    username: "admin",
    password: "123",
    role: "Admin",
  },
  {
    username: "editor",
    password: "123",
    role: "Editor",
  },
  {
    username: "viewer",
    password: "123",
    role: "Viewer",
  },
];

export const login = (username, password) => {
  const user = users.find(
    (u) =>
      u.username === username &&
      u.password === password
  );

  if (!user) return null;

  const token = btoa(
    JSON.stringify({
      username: user.username,
      role: user.role,
      exp: Date.now() + 3600000,
    })
  );

  localStorage.setItem("token", token);

  return token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getUser = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};

export const isAuthenticated = () => {
  const user = getUser();

  if (!user) return false;

  return user.exp > Date.now();
};