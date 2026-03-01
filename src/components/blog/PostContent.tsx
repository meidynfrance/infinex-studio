import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  content: string;
};

export function PostContent({ content }: Props) {
  return (
    <div className="prose-blog">
      <MDXRemote source={content} />
    </div>
  );
}
