"use client";

export const LogoutButton = () => {
  const handleLogout = () => {
    // remove usuário
    localStorage.removeItem("user");

    // 🔥 força atualização do hook
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-2 text-sm text-red-500"
    >
      Sair
    </button>
  );
};
