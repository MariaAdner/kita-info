import useSWR from "swr";
import { useRouter } from "next/router";
import {
  StyledEventItem,
  StyledTitle,
  StyledDate,
  StyledDescription,
} from "./EventItem.styled";

export default function NewsItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/events/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledEventItem>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledDescription
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></StyledDescription>
        <StyledDate>{data.date}</StyledDate>
      </StyledEventItem>
    </>
  );
}
