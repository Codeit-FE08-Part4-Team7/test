import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className="text-8xl">테스트용</h2>
      <div>테스트</div>
      <Link className="text-blue-400" href="/boards">
        자유게시판 링크
      </Link>
    </div>
  );
}
