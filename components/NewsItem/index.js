import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledDate, StyledTitle, StyledText } from "./NewsItem.styled";
import { StyledNewsItem } from "./NewsItem.styled";

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
      <StyledNewsItem>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledText
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></StyledText>
        <StyledDate>{data.date}</StyledDate>
      </StyledNewsItem>
    </>
  );
}
