import { useEffect } from "react";

export default function Blank() {
  const link = "http://ppid.uho.ac.id/auth/admin";
  useEffect(() => {
    window.location.href = link;
  });

  return <div className="p-5 text-center">Redirect to Admin</div>;
}
