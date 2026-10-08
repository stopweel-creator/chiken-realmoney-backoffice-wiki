import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: process.env.SITE_URL || 'https://backoffice-wiki.example.com',
  integrations: [
    starlight({
      title: 'Unstopable Backoffice Wiki',
      description: 'Структурированная документация по бэкофису Unstopable для администратора, менеджера, бухгалтера и финансиста.',
      social: {},
      locales: {
        root: { label: 'Русский', lang: 'ru' },
        en: { label: 'English', lang: 'en' },
        uk: { label: 'Українська', lang: 'uk' }
      },
      defaultLocale: 'root',
      sidebar: [
        {
          label: 'Старт',
          items: [
            { label: 'Обзор', slug: 'index' },
            { label: 'Принципы работы', slug: 'operating-principles' },
            { label: 'Типсы', slug: 'tips' }
          ]
        },
        {
          label: 'Пошаговые инструкции',
          items: [
            { label: 'Обзор админ-панели', slug: 'guides/admin-panel-overview' },
            { label: 'Работа с dashboard', slug: 'guides/admin-dashboard-workflow' },
            { label: 'Управление колесом фортуны', slug: 'guides/fortune-wheel-management' },
            { label: 'Работа с очередью выводов', slug: 'guides/withdraw-queue-workflow' },
            { label: 'Проверка аудита и действий', slug: 'guides/audit-and-action-log-review' }
          ]
        },
        {
          label: 'Роли',
          items: [
            { label: 'Администратор', slug: 'roles/administrator' },
            { label: 'Менеджер', slug: 'roles/manager' },
            { label: 'Бухгалтер', slug: 'roles/accountant' },
            { label: 'Финансист', slug: 'roles/finance-specialist' }
          ]
        },
        {
          label: 'Типы admin actions',
          items: [
            { label: 'Изменение баланса', slug: 'actions/balance-actions' },
            { label: 'Действия по раундам', slug: 'actions/round-actions' },
            { label: 'Изменение колеса фортуны', slug: 'actions/fortune-wheel-config-action' }
          ]
        },
        {
          label: 'Справочник',
          items: [
            { label: 'Модули бэкофиса', slug: 'reference/backoffice-modules' },
            { label: 'Термины и типы', slug: 'reference/terms-and-types' },
            { label: 'Анимации и темы интерфейса', slug: 'reference/interface-motion-and-themes' },
            { label: 'Политика безопасных скриншотов', slug: 'reference/safe-screenshot-policy' }
          ]
        }
      ],
      customCss: ['./src/styles/wiki.css']
    })
  ]
});
