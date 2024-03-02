import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts: PostType[ ] = [
  {
    id: 1,
    author: {
      avatarUrl: '/images/profile-pic.jpeg',
      name: 'Martin Doe',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Sabe aquele sentimento de pura felicidade que não cabe dentro do peito?',
      },
      {
        type: 'paragraph',
        content:
          'Hoje é um daqueles dias que vou guardar para sempre no coração! Recebi uma surpresa maravilhosa que me deixou radiante de alegria! É incrível como uma simples novidade pode fazer toda a diferença e encher nossas vidas de felicidade. Estou transbordando de gratidão e amor! ',
      },
      {
        type: 'link',
        content: 'wow',
      },
    ],
    publishedAt: new Date('2024-01-28 19:53:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: '/images/profile-pic2.jpeg',
      name: 'Jhon Doe',
      role: 'UX/UI Design',
    },
    content: [
      {
        type: 'paragraph',
        content: '',
      },
      {
        type: 'paragraph',
        content:
          'A cada dia que passa, fico mais fascinado com os avanços tecnológicos que estão ocorrendo ao nosso redor! A velocidade com que a tecnologia está evoluindo é simplesmente incrível, e estou animado para ver como ela continuará a moldar nossas vidas e impulsionar o progresso humano. O futuro está chegando, e é emocionante fazer parte dessa jornada!',
      },
      {
        type: 'link',
        content: 'news',
      },
    ],
    publishedAt: new Date('2024-01-27 14:21:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
