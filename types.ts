export enum AppType {
  HOME = 'HOME',
  JMAIL = 'JMAIL',
  JPHOTOS = 'JPHOTOS',
  JDRIVE = 'JDRIVE',
  JFLIGHTS = 'JFLIGHTS',
  JVR = 'JVR',
  JAMAZON = 'JAMAZON',
  JEMINI = 'JEMINI',
  JOTIFY = 'JOTIFY',
  JMESSAGES = 'JMESSAGES',
  JACEBOOK = 'JACEBOOK',
  TOPICS = 'TOPICS',
  FIND_PEOPLE = 'FIND_PEOPLE',
  STORY = 'STORY',
  SEARCH = 'SEARCH',
  DROPBOX = 'DROPBOX',
  GDRIVE_BACKUP = 'GDRIVE_BACKUP',
  FINDER = 'FINDER'
}

export enum PageType {
  ABOUT = 'ABOUT',
  TOS = 'TOS',
  PRIVACY = 'PRIVACY',
  DONATE = 'DONATE'
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone?: string;
}

export interface Message {
  id: string;
  text: string;
  isMe: boolean;
  timestamp: number;
}

export interface Thread {
  id: string;
  participantId: string;
  messages: Message[];
  updatedAt: number;
  unreadCount: number;
  lastMessagePreview: string;
}

export interface Email {
  id: string;
  senderId: string;
  subject: string;
  body: string;
  timestamp: number;
  isRead: boolean;
}

export interface AppState {
  currentUser: User;
  activeApp: AppType | null;
  isMinimized: boolean;
  isMaximized: boolean;
}