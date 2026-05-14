
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
    date: '24 ABR',
    content: 'Convocado para estagiar na SEFAZ - BA.',
    icon: 'folder',
  },
  {
    id: '2',
    category: 'ESTUDO',
    date: '24 ABR',
    content: 'Estudando Estrutura de Dados em Java',
    icon: 'lightning',
  },
  {
    id: '3',
    category: 'PROJETO',
    date: '11 MAI',
    content: 'Resilient-Audit Batch: Auditoria e busca de transações foi concluido com sucesso! Veja em meus projetos.',
    icon: 'gear',
  }
  
];