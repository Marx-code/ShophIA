import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://karl12.app.n8n.cloud/webhook/4f80275a-c258-4452-a717-5cda67b2aaae/chat',
  webhookConfig: {
    method: 'POST',
    headers: {}
  },
  target: '#n8n-chat',
  mode: 'window',
  chatInputKey: 'chatInput',
  chatSessionKey: 'sessionId',
  metadata: {},
  showWelcomeScreen: false, 
  defaultLanguage: 'pt',
  initialMessages: [
    'Olá! 👋 Eu sou SophIA, sua recrutadora virtual. Hoje vou conduzir uma simulação de entrevista para a vaga de Atendente de Loja na Moda Jovem, uma loja especializada em roupas casuais e femininas.  😊'
  ],
 i18n: {
    pt: {
      title: 'ShophIA',
      subtitle: 'Sua Recrutadora Virtual!',
      footer: '',            
      getStarted: 'Nova conversa',
      inputPlaceholder: 'Digite sua mensagem aqui...'
    }
  },
});