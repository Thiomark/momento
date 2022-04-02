import Routes from './src/project/Routes';
import { AuthProvider } from './src/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </QueryClientProvider> 
    )
};

export default App
