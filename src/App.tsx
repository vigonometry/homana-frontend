import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContainer from "./components/navigation/AppContainer";
import AuthPage from "./pages/AuthPage";
import ClaimsPage from "./pages/ClaimsPage";
import DashboardPage from "./pages/DashboardPage";
import PoliciesPage from "./pages/PoliciesPage";
import { CURRENT_USER } from "./queries/auth";
import { User } from "./types/user";

export default function App() {

	const [user, setUser] = useState<User | null | undefined>(undefined)

	const { loading, data } = useQuery(CURRENT_USER)

	useEffect(() => {
		if (data) setUser(data.currentUser)
	}, [loading, data])

	if (user === undefined) return <></>
	if (user === null) return <AuthPage/>

	return (
		<AppContainer user={user}>
			<Routes>
				<Route path="/" element={<DashboardPage user={user}/>}/>
				<Route path="/claims" element={<ClaimsPage/>}/>
				<Route path="/policies" element={<PoliciesPage/>}/>
			</Routes>
		</AppContainer>
	)
}