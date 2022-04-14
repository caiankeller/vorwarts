import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useAuth } from "./hooks/useAuth";
import UserBooks from "./UserBooks";
import DashboardOptions from "./DashboardOptions";

export default function Dashboard() {
  const user = useAuth().user;

  return (
    <Container>
      <Title>Dashboard</Title>
      <Profile>
        <FaUserCircle style={{ marginRight: "0.5rem" }} />
        <Subtitle style={{ marginTop: 0 }}>{user.username}</Subtitle>
      </Profile>
      <Subtitle>Books</Subtitle>
      <UserBooks user={user} />
      <Subtitle>Profile</Subtitle>
      <DashboardOptions />
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Subtitle = styled.h2`  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #141414;
  color: white;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 7px;
`;
