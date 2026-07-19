import type { SignalingMessage } from '@mycellium/types';

const PORT = Number(process.env.PORT) || 3001;

// Placeholder — future WebSocket / libp2p signaling server
console.log(`spora-server placeholder listening on :${PORT}`);

// Example type usage to verify workspace linking
const _example: SignalingMessage = {
  type: 'offer',
  sdp: '',
  peerId: 'placeholder',
};

void _example;
