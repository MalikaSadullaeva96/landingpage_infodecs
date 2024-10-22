import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Available on these technologies and beyond
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.tableau.com/"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require('../../assets/img/brand/tableau.png')}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                      Tableau 
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://aws.amazon.com/"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require('../../assets/img/brand/aws.webp')}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                      Amazon Web Services
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.microsoft.com/"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require('../../assets/img/brand/excel.png')}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                      Microsoft Excel
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.microsoft.com/en-us/power-platform/products/power-bi"
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require('../../assets/img/brand/powerbi.webp')}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                      Microsoft Power BI
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.python.org/"
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require('../../assets/img/brand/python.webp')}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Python
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.mysql.com/"
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require('../../assets/img/brand/sql.png')}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        SQL
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
