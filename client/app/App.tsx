import RootNavigator from '@/app/navigation/RootNavigator';
import '@/app/global.css';
import { UserProvider } from '@/app/context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <RootNavigator />
    </UserProvider>
  );
}
