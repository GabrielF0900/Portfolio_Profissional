
// src/notifications/notificationsData.ts

export type IconType = 'folder' | 'lightning' | 'gear' | 'shield';

export interface NotificationEntry {
  id: string;
  category: string;
  date: string;
  content: string;
  icon: IconType;
}

export const notificationsData: NotificationEntry[] = [



  {
    id: '2',
    category: 'PROJETO',
    date: '18 MAI',
    content: 'SafeWallet Core: Arquitetura perimetral com Spring Security e autenticação Stateless JWT implementada com sucesso! Veja em meus projetos.',
    icon: 'shield', // Alterado sutilmente para 'shield' para combinar com segurança, ou mantenha 'gear' se preferir.
  },
  {
    id: '2',
    category: 'ESTUDO',
    date: '25 MAI',
    content: 'Estudando Spring Boot',
    icon: 'lightning',
  },
  
  {
    id: '3',
    category: 'CARREIRA',
    date: '24 ABR',
    content: 'Convocado para estagiar na SEFAZ - BA.',
    icon: 'folder',
  }
  
];