import { Breadcrumbs, Container, Footer } from "../../components";

const ActivitiesPage = () => {
  return (
    <div>
      <Container>
        <img src="/images/eduque-purple-logo.svg" alt="Purple Logo" />
        <Breadcrumbs
          items={[
            { label: "Home", url: "/" },
            { label: "Activities", url: "/activities" },
          ]}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
