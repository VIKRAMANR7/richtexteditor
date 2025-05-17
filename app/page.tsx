"use client";

import { useState } from "react";

import RichTextEditor from "@/components/rich-text-editor";
export default function Home() {
  const [post, setPost] = useState("");
  const onChange = (content: string) => setPost(content);
  return (
    <div className="max-w-3xl mx-auto py-8">
      <RichTextEditor content={post} onChange={onChange} />
    </div>
  );
}
