import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './services/theme';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apolloClientProvider';
import UserContextProvider from './services/userContextProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ApolloProvider client={apolloClient}>
			<UserContextProvider>
				<MantineProvider theme={theme}>
					<App/>
				</MantineProvider>
			</UserContextProvider>
		</ApolloProvider>
	</BrowserRouter>
);