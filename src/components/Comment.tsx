import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Comment {
  content: string;
  deleteComment: (arg0: string) => void;
}
export const Comment = ({ content, deleteComment }: Comment) => {
  const [like, setLike] = useState(0);
  const handleDeleteComment = () => {
    deleteComment(content);
  };
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/highlander08.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Highlander Santos</strong>
              <time title="11 de maio de 00:12" dateTime="2022-05-11 00:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => setLike((prev) => prev + 1)}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
