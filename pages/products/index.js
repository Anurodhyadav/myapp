import Head from "next/head";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const index = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Head>
        <title>Product page</title>
        <meta
          name="description"
          content="used car vans bus suv home page"
        ></meta>
      </Head>
      <NavBar />
      <Header />
      <h6>
        ....................................................................................................showing
        results 1of
        20..............................................................................
      </h6>
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row></Row>
        <Row>
          <Col md={3}>
            <h1>Filter</h1>
            <h6>filter item</h6>
            <h6>filter item</h6>
            <h6>filter item</h6>
            <h6>filter item</h6>
            <h6>filter item</h6>
            <h6>filter item</h6>
            <h6>filter item</h6>
          </Col>
          <Col md={9}>
            <Row>
              {data.map((item, idx) => (
                <Col key={item.id} xs={12} md={4} className="mt-2">
                  <Card >
                    <Card.Img
                      variant="top"
                      src={item.thumbnailUrl}
                      style={{ height: "12rem" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        {item.title.length > 30
                          ? item.title.substring(0, 25) + "..."
                          : item.title.length}
                      </Card.Title>
                      <Link href="/products/[slug]" as={`/products/${item.title}`}><Button variant="dark">Details</Button></Link>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=6`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};
