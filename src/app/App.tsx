import { Routes, Route, Navigate } from 'react-router';
import { withReactQuery } from './providers/with-react-query';
import { Toast } from "./providers/toast";
import { ThemeProvider } from './providers/theme';

import { PageContainer } from '@/shared/ui/PageContainer';

import { Sidebar } from '@/widgets/sidebar';
import { Header } from '@/widgets/header';

import { PostsPage } from '@/pages/PostsPage';
import { PostDetailsPage } from '@/pages/PostDetailsPage';
import { UsersPage } from '@/pages/UsersPage';
import { UserDetailsPage } from '@/pages/UserDetailsPage';
import { PostsAdminPage } from '@/pages/PostsAdminPage';
import { UsersAdminPage } from '@/pages/UsersAdminPage';
import { CommentsAdminPage } from '@/pages/CommentsAdminPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const AppContent = () => {
  return (
    <ThemeProvider>
      <div className="flex h-screen w-screen bg-main">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Header />
          <main className="w-full flex-1 overflow-y-auto p-6">
              <Toast />
              <Routes>
                  <Route path="/" element={<Navigate to="/posts" />} />

                  <Route path="/posts" element={<PostsPage />} />
                  <Route path="/posts/:postId" element={<PostDetailsPage />} />

                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/users/:id"  element={<UserDetailsPage />} />

                  <Route path="/admin/posts" element={<PostsAdminPage />} />
                  <Route path="/admin/users" element={<UsersAdminPage />} />
                  <Route path="/admin/comments" element={<CommentsAdminPage />} />

                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export const App = withReactQuery(AppContent);
