import { PasswordGate } from './components/PasswordGate/PasswordGate';
import { BirthdayExperience } from './pages/BirthdayExperience';

function App() {
  return (
    <PasswordGate>
      <BirthdayExperience />
    </PasswordGate>
  );
}

export default App;
