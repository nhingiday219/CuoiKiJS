import { Routes, Route } from "react-router-dom";

import Base from "./scenes/Base/Base";
import Admin from "./scenes/admin/admin";
import { CHECK_ACCESS } from "./api/handleCheckAccess";
import { useQuery } from "@tanstack/react-query";
function App() {
  const CHECKACCESS = useQuery({
    queryKey: ["Access"],
    queryFn: async () => {
      const result = await CHECK_ACCESS();
      return result; // Ensure the result is returned
    },
  });
  return (
    <Routes>
      {CHECKACCESS.data?.success ? (
        <>
          <Route
            path="/admin"
            element={
              <Base>
                <Admin />
              </Base>
            }
          />
        </>
      ) : (
        ""
      )}
    </Routes>
  );
}

export default App;
