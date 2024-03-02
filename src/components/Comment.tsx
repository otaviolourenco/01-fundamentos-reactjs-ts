import styles from './Comment.module.css';
import { PiHandsClappingDuotone } from 'react-icons/pi';
import { GoTrash } from 'react-icons/go';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string )=> void;
}

export function Comment({ content, onDeleteComment }:CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  //Para deletar comentátio
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((newLikeCount) => {
      return newLikeCount + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="/images/profile-pic3.jpeg" alt=''/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alex Doe</strong>
              <time
                title="27 de Janeiro de 2024 às 19:21"
                dateTime="2024-01-27 19:21:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <GoTrash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <PiHandsClappingDuotone />
            <p>
              Aplaudir <span>{likeCount}</span>
            </p>
          </button>
        </footer>
      </div>
    </div>
  );
}
