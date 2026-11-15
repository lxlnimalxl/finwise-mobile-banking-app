import React, { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import HomeScreen from './components/screens/HomeScreen';
import AnalysisScreen from './components/screens/AnalysisScreen';
import TransactionsScreen from './components/screens/TransactionsScreen';
import CategoriesScreen from './components/screens/CategoriesScreen';
import SavingsScreen from './components/screens/SavingsScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import NotificationDrawer from './components/modals/NotificationDrawer';
import AddTransactionModal from './components/modals/AddTransactionModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen
            onNavigate={setActiveTab}
            onOpenNotifications={() => setIsNotificationOpen(true)}
            onOpenAdd={() => setIsAddModalOpen(true)}
          />
        );
      case 'analysis':
        return <AnalysisScreen onNavigate={setActiveTab} />;
      case 'transactions':
        return <TransactionsScreen onOpenAdd={() => setIsAddModalOpen(true)} />;
      case 'category':
        return <CategoriesScreen onNavigate={setActiveTab} />;
      case 'savings':
        return <SavingsScreen onOpenAdd={() => setIsAddModalOpen(true)} />;
      case 'profile':
        return <ProfileScreen onNavigate={setActiveTab} />;
      default:
        return (
          <HomeScreen
            onNavigate={setActiveTab}
            onOpenNotifications={() => setIsNotificationOpen(true)}
            onOpenAdd={() => setIsAddModalOpen(true)}
          />
        );
    }
  };

  return (
    <PhoneFrame
      activeTab={activeTab}
      onSelectTab={setActiveTab}
      onOpenNotifications={() => setIsNotificationOpen(true)}
      onOpenAdd={() => setIsAddModalOpen(true)}
    >
      {renderActiveScreen()}

      {/* Slide-over Notifications */}
      <NotificationDrawer
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      {/* Add Transaction / Savings Modal */}
      <AddTransactionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddSuccess={(data) => {
          console.log('Transaction added:', data);
        }}
      />
    </PhoneFrame>
  );
}
