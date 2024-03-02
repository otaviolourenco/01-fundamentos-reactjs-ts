import { format, formatDistanceToNow } from 'date-fns';
import ptPT from 'date-fns/locale/pt';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author{
  name: string,
  role: string,
  avatarUrl: string,
}

interface Content{
  type: 'paragraph' | 'link',
  content: string
}

export interface PostType{
  id: number;
  author: Author,
  publishedAt: Date,
  content: Content[],
}

interface PostProps{
  post: PostType;
}

export function Post({ post }:PostProps ) {
  const [comments, setComments] = useState(['Post muito bacana!']);

  const [newCommentText, setNewCommentText] = useState('');

  // Converter a data que foi publicado
  const publishedDateFormated = format(
    post.publishedAt,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm",
    {
      locale: ptPT,
    },
  );

  //Converter data relativa da data que foi publicado até hoje
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptPT,
    addSuffix: true,
  });

  //Adicionar novo comentário
  function handleCreateNewComment(event: FormEvent) {
    //evitar que redirecione ao submeter o formulário
    event.preventDefault();

    setComments([...comments, newCommentText]);

    //Depois de adicionar o comentário, vamos voltar para o estado original, que será um valor em branco
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement> ) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete: string ) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow} atrás
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a href="#">#{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Escreva seu comentário..."
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar{' '}
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
