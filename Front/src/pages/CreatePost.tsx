import React, { useState, FormEvent, ChangeEvent } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [redirect, setRedirect] = useState<boolean>(false);

  async function createNewPost(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    
    if (!title || !summary || !content || !files) {
      alert('Please fill all fields');
      return;
    }

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.append('file', files[0]);
    
    const response = await fetch('http://localhost:9000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={createNewPost}>
            <div className="form-group">
              <input 
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)} />
            </div>
            <div className="form-group">
              <input 
                type="text"
                className="form-control"
                placeholder="Summary"
                value={summary}
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setSummary(ev.target.value)} />
            </div>
            <div className="form-group">
              <input 
                type="file"
                className="form-control-file"
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setFiles(ev.target.files)} />
            </div>
            <div className="form-group">
              <Editor 
                value={content} 
                onChange={(value: string) => setContent(value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Create post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
