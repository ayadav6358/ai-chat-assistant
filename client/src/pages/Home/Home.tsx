import { useMemo, useState } from 'react';
import { Box, Button, Container, Paper } from '@mui/material';
import Header from '../../components/Header/Header';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import ChatInput from '../../components/ChatInput/ChatInput';
import appConfig from '../../config/app';
import { useHealthCheck } from '../../hooks/useHealthCheck';
import type { ChatMessage } from '../../types/chat';
import './Home.css';

const Home = () => {
  const health = useHealthCheck();
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-1',
      sender: 'ai',
      text: '👋 Welcome! This interface is the foundation for the full AI assistant experience.',
    },
    {
      id: 'initial-2',
      sender: 'user',
      text: 'What is included in this first milestone?',
    },
    {
      id: 'initial-3',
      sender: 'ai',
      text: 'The initial setup includes a polished client shell, backend health endpoint, architecture documentation, and a scalable folder structure for future features.',
    },
  ]);

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed) {
      return;
    }

    const newMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };

    setMessages((current) => [...current, newMessage]);
    setDraft('');
  };

  const healthLabel = useMemo(() => {
    if (health.status === 'loading') return 'Checking backend...';
    if (health.status === 'success') return `Connected: ${health.data?.name ?? 'API'}`;
    return health.message;
  }, [health]);

  return (
    <Box className="home-shell">
      <Header />

      <Box className="home-content">
        <Container maxWidth="lg" className="home-container">
          <Paper elevation={0} className="home-paper">
            <div className="home-toolbar">
              <div>
                <p className="toolbar-label">AI Assistant</p>
                <h2>{appConfig.appName}</h2>
              </div>
              <div className="toolbar-actions">
                <Button variant="outlined" size="small">
                  New Chat
                </Button>
                <span className={`health-pill ${health.status}`}>{healthLabel}</span>
              </div>
            </div>

            <ChatWindow messages={messages} />
            <ChatInput value={draft} onChange={setDraft} onSend={handleSend} />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;