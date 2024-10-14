import useSWR from "swr";
import { useRouter } from "next/router";
import Header from "../Header";
import { StyledTitle } from "./NewsItem.styled";
import { StyledNewsItem } from "./NewsItem.styled";
import BackButton from "../BackButton";
import Link from "next/link";

export default function NewsItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/news/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <Header />
      <Link href="/neuigkeiten">
        <BackButton></BackButton>
      </Link>
      <StyledNewsItem>
        <StyledTitle>{data.title}</StyledTitle>
        <p>{data.date}</p>
        <p> {data.text}</p>
      </StyledNewsItem>
    </>
  );
}
