import RootNavigator from '@/app/navigation/RootNavigator';
import '@/app/global.css';
import { UserProvider } from '@/context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <RootNavigator />
    </UserProvider>
  );
}
