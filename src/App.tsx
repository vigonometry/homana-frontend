import { Route, Routes } from "react-router-dom";
import AppContainer from "./components/navigation/AppContainer";
import ClaimsPage from "./pages/ClaimsPage";
import DashboardPage from "./pages/DashboardPage";
import PoliciesPage from "./pages/PoliciesPage";

export default function App() {
	return (
		<AppContainer>
			<Routes>
				<Route path="/" element={<DashboardPage/>}/>
				<Route path="/claims" element={<ClaimsPage/>}/>
				<Route path="/policies" element={<PoliciesPage/>}/>
			</Routes>
		</AppContainer>
	)
}