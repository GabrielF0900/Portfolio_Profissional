
// src/notifications/notificationsData.ts

export type IconType = 'folder' | 'lightning' | 'gear';

export interface NotificationEntry {
  id: string;
  category: string;
  date: string;
  content: string;
  icon: IconType;
}

export const notificationsData: NotificationEntry[] = [
  {
    id: '1',
    category: 'CARREIRA',
    date: '09 MAI',
    content: 'Integração iniciada na SEFAZ-BA (Estágio).',
    icon: 'folder',
  },
  {
    id: '2',
    category: 'ESTUDO',
    date: '08 MAI',
    content: 'Aprofundando em Arquitetura Serverless (AWS SAP-C02).',
    icon: 'lightning',
  },
  {
    id: '3',
    category: 'PROJETO',
    date: '07 MAI',
    content: 'Implementando CI/CD no Nebula-Archive (Go/AWS).',
    icon: 'gear',
  },
  {
    id: '4',
    category: 'SISTEMA',
    date: '06 MAI',
    content: 'Lançamento da nova feature do Journal Engineering.',
    icon: 'lightning',
  }
];