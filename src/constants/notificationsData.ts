
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
    id: '1',
    category: 'CARREIRA',
    date: '09 JUL',
    content: 'Em etapa final no processo seletivo do Serasa Experian.',
    icon: 'folder',
  },
  {
    id: '2',
    category: 'CARREIRA',
    date: '09 JUL',
    content: 'Indo buscar contrato na SEFAZ.',
    icon: 'folder',
  },
  {
    id: '3',
    category: 'PROJETO',
    date: '09 JUL',
    content: 'Projeto com arquitetura de microsserviços concluído com sucesso.',
    icon: 'shield',
  },
  {
    id: '4',
    category: 'ESTUDO',
    date: '09 JUL',
    content: 'Estudando Microsserviços',
    icon: 'lightning',
  },
  {
    id: '5',
    category: 'ESTUDO',
    date: '09 JUL',
    content: 'Iniciando estudos em Kubernetes',
    icon: 'lightning',
  },

];