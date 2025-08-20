import React, { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type DetailProps = {
  post: Post;
};

class DetailPost extends Component<DetailProps> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
        <h3>{title}</h3>
        <p><b>ID:</b> {id}</p>
        <p><b>Nội dung:</b> {content}</p>
        <p><i>Tác giả:</i> {author}</p>
      </div>
    );
  }
}

type StateType = {
  posts: Post[];
};

class ListPost extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: "ReactJS cơ bản", content: "Giới thiệu JSX và component.", author: "Nguyễn Văn A" },
        { id: 2, title: "State & Props", content: "Quản lý dữ liệu trong React.", author: "Trần Thị B" },
        { id: 3, title: "Lifecycle Methods", content: "Các giai đoạn của component.", author: "Lê Văn C" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Danh sách bài viết</h1>
        {this.state.posts.map(post => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default ListPost;
