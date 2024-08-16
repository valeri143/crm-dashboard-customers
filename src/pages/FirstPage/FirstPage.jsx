import { Container, Title } from './FirstPage.styled';
import { Sidebar } from '../../components/SideBar/SideBar';
import { Customers } from '../../components/Customers/Customers';

const FirstPage = () => {
  return (
    <Container>
      <Title>First Page</Title>
      <div className="dashboard-container">
        <Sidebar />
        <Customers />
      </div>
    </Container>
  );
};

export default FirstPage;
