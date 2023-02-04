import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}
export interface IPostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface Content {
  type: "paragraph" | "link";
  content: string;
}

export const Post = (props: IPostProps) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const [filtered, setfiltered] = useState<string[]>([]);
  const [filter, setfilter] = useState<string>("");

  const DateFormatted = format(props.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  });
  const DateFormattedToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };
  const deleteComment = (commentDelete: string) => {
    const deleteCommentOne = comments.filter(
      (comment) => comment !== commentDelete
    );
    setComments(deleteCommentOne);
  };
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio");
  }

  useEffect(() => {
    setfiltered(comments.filter((item) => item.includes(filter)));
  }, [filter]);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time title={DateFormatted} dateTime={props.publishedAt.toISOString()}>
          {DateFormattedToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((line: Content) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <input
        value={filter}
        type="text"
        className={styles.effectInput}
        onChange={(e) => setfilter(e.target.value)}
      />
      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          value={newComment}
          name="comment"
          placeholder="Deixe o comentario"
          required
        />
        <footer>
          <button disabled={newComment.length === 0} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {!filter
          ? comments.map((comment, i) => (
              <Comment
                deleteComment={deleteComment}
                key={comment}
                content={comment}
              />
            ))
          : filtered.map((comment, i) => (
              <Comment
                deleteComment={deleteComment}
                key={comment}
                content={comment}
              />
            ))}
      </div>
    </article>
  );
};
