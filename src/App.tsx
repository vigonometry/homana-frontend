import { Route, Routes } from "react-router-dom";
import AppContainer from "./components/navigation/AppContainer";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
	return (
		<AppContainer>
			<Routes>
				<Route path="/" element={<DashboardPage/>}/>
			</Routes>
		</AppContainer>
	)
}