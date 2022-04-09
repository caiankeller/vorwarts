import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "./hooks/useAuth";

export default function Dashboard() {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user.token.length === 0) {
      navigate("/dashboard/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
      <Title>Dashboard</Title>
      <Subtitle>Something cool will be here any time.</Subtitle>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Subtitle = styled(Title)`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;
