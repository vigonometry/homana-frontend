import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './services/theme';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apolloClientProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ApolloProvider client={apolloClient}>
			<MantineProvider theme={theme}>
				<App/>
			</MantineProvider>
		</ApolloProvider>
	</BrowserRouter>
);