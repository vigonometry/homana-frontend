import { ReactNode } from "react";
import { User } from "../types/user";

export default function userComponentSelector(user: User, ifCustomer: JSX.Element, ifAgent: JSX.Element, ifCompany: JSX.Element) {
	return user.__typename === 'Broker' ? ifCompany : user.__typename === 'Agent' ? ifAgent : ifCustomer
}