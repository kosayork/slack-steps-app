import { useState } from 'react';
import { FooterNav } from './components/FooterNav';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { CheckScreen } from './screens/CheckScreen';
import { GuideScreen } from './screens/GuideScreen';
import { PrivacyScreen } from './screens/PrivacyScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ClearedUsersScreen } from './screens/ClearedUsersScreen';
import { SplashScreen } from './screens/SplashScreen';
import { TutorialScreen, isTutorialCompleted, resetTutorial } from './screens/TutorialScreen';
import { Rank } from './types/technique';

type AppPhase = 'splash' | 'tutorial' | 'main';
type MainScreen = 'home' | 'check' | 'profile' | 'guide' | 'privacy' | 'about' | 'clearedUsers';

interface Profile {
  nickname: string;
  avatarUrl: string;
}

const STORAGE_KEY_CLEARED = 'slackStepsClearedSkills';

function readClearedIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CLEARED);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

function saveClearedIds(ids: string[]) {
  localStorage.setItem(STORAGE_KEY_CLEARED, JSON.stringify(ids));
}

export type PendingClear = { type: 'nice'; rank: Rank } | { type: 'complete'; rank: Rank };

function App() {
  const [phase, setPhase] = useState<AppPhase>('splash');
  const [homeFadeIn, setHomeFadeIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<MainScreen>('home');
  const [profile, setProfile] = useState<Profile>(() => ({
    nickname: localStorage.getItem('slackStepsNickname') ?? '',
    avatarUrl: localStorage.getItem('slackStepsProfileImage') ?? '',
  }));
  const [clearedIds, setClearedIds] = useState<string[]>(() => readClearedIds());
  const [pendingClear, setPendingClear] = useState<PendingClear | null>(null);
  const [homeInitialTab, setHomeInitialTab] = useState<Rank>('Start');

  const goToMain = () => {
    setPhase('main');
    // brief delay so React renders main before we add the fade-in class
    setTimeout(() => setHomeFadeIn(true), 16);
  };

  const goHome = () => setCurrentScreen('home');

  const handleClearSkills = (newIds: string[], pending: PendingClear) => {
    const merged = Array.from(new Set([...clearedIds, ...newIds]));
    saveClearedIds(merged);
    setClearedIds(merged);
    setPendingClear(pending);
    setHomeInitialTab(pending.rank);
    setCurrentScreen('home');
  };

  const handleResetCleared = () => {
    localStorage.removeItem(STORAGE_KEY_CLEARED);
    setClearedIds([]);
  };

  const handleResetTutorial = () => {
    resetTutorial();
    setCurrentScreen('home');
    setHomeFadeIn(false);
    setPhase('splash');
  };

  if (phase === 'splash') {
    return (
      <div className="app-shell min-h-screen bg-background">
        <div className="app-container max-w-md mx-auto min-h-screen relative">
          <SplashScreen onDone={() => isTutorialCompleted() ? goToMain() : setPhase('tutorial')} />
        </div>
      </div>
    );
  }

  if (phase === 'tutorial') {
    return (
      <div className="app-shell min-h-screen bg-background">
        <div className="app-container max-w-md mx-auto min-h-screen relative">
          <TutorialScreen onComplete={goToMain} />
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            profile={profile}
            clearedIds={clearedIds}
            pendingClear={pendingClear}
            onClearPending={() => setPendingClear(null)}
            initialTab={homeInitialTab}
            onGuide={() => setCurrentScreen('guide')}
            onPrivacy={() => setCurrentScreen('privacy')}
            onAbout={() => setCurrentScreen('about')}
            onClearedUsers={() => setCurrentScreen('clearedUsers')}
          />
        );
      case 'check':
        return (
          <CheckScreen
            onBack={goHome}
            clearedIds={clearedIds}
            onClearSkills={handleClearSkills}
            onResetCleared={handleResetCleared}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            profile={profile}
            onSave={setProfile}
            onBack={goHome}
            onResetTutorial={handleResetTutorial}
            onImport={(restoredProfile, restoredIds) => {
              setProfile(restoredProfile);
              setClearedIds(restoredIds);
            }}
          />
        );
      case 'guide':
        return <GuideScreen onBack={goHome} />;
      case 'privacy':
        return <PrivacyScreen onBack={goHome} />;
      case 'about':
        return <AboutScreen onBack={goHome} />;
      case 'clearedUsers':
        return <ClearedUsersScreen onBack={goHome} />;
      default:
        return (
          <HomeScreen
            profile={profile}
            clearedIds={clearedIds}
            pendingClear={pendingClear}
            onClearPending={() => setPendingClear(null)}
            initialTab={homeInitialTab}
            onGuide={() => setCurrentScreen('guide')}
            onPrivacy={() => setCurrentScreen('privacy')}
            onAbout={() => setCurrentScreen('about')}
            onClearedUsers={() => setCurrentScreen('clearedUsers')}
          />
        );
    }
  };

  const showFooter = currentScreen === 'home';

  return (
    <div className="app-shell min-h-screen bg-background">
      <div className={`app-container max-w-md mx-auto min-h-screen flex flex-col relative page-fade ${homeFadeIn ? 'page-fade-in' : ''}`}>
        <main className="flex-1 relative">{renderContent()}</main>
        {showFooter && (
          <FooterNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}

export default App;
