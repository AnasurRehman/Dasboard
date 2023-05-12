import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./global/TopBar";
import Sidebar from "./global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Invoices from "./pages/invoices/Invoices";
import Faq from "./pages/faq/Faq";
import Contacts from "./pages/contacts/Contacts";
import Bar from "./components/charts/Bar/Bar";
import Calendar from "./components/common/Calendar";
import Profile from "./components/form/Profile";
import Line from "./components/charts/Line/Line";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack direction="row">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Stack p={2}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<Line />} />
                <Route path="/form" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </Stack>
          </main>
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
