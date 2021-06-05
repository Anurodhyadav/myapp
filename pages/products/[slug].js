import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const Details = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>Product Detail</title>
        <meta
          name="description"
          content="used motors individual details page"
        ></meta>
      </Head>
      <NavBar />
      <Header />
      <Container fluid style={{ marginTop: "1rem" }}>
        <Col>
          <Row>
            <Col>
              <Image
                src="/car.jpg"
                alt={slug}
                width={500}
                height={300}
                layout="responsive"
                priority 
              />
            </Col>
            <Col>
            <h1>Details</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <span>
                  <b>Summary of motor: </b>
                </span>
                {slug}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-md-center">
              <h4>Description</h4>
              <h6>
                <span>
                  <b>Summary of motor: </b>
                </span>
                {slug}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-md-center">
              <h4>Contact</h4>
              <h6>Contact form</h6>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Details;
