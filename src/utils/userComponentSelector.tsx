import { User } from "../types/user";

export default function userComponentSelector(user: User, comps: { client?: JSX.Element, agent?: JSX.Element, broker?: JSX.Element}) {
	if (user.__typename === 'Broker') {
		return comps.broker ? comps.broker : <></>
	} else if (user.__typename === 'Agent') {
		return comps.agent ? comps.agent : <></>
	} else {
		return comps.client ? comps.client : <></>
	}
}