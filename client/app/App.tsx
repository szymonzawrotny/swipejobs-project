import RootNavigator from './navigation/RootNavigator';
import './global.css';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <RootNavigator />
    </UserProvider>
  );
}
