import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const DisplayJobs = ({ data }) => {
  return (
    <Container>
      {data.map((job) => {
        const tags = [job.role, job.level];

        if (job.languages) {
          tags.push(...job.languages);
        }
        if (job.tools) {
          tags.push(...job.tools);
        }

        return (
          <Row className ={`row-box ${job.featured && 'row-add'}`} key={job.id}>
            <Col className="row-img" >
              <Image src={job.logo} roundedCircle />
            </Col>
            <Col className="row-item-one" >
              <h3>
                {job.company}
                {job.new && <span className='row-item-one-new'>New</span>}
                {job.featured && <span className='row-item-one-featured'>Featured</span>}
              </h3>
              <h2>{job.position}</h2>
              <p>
                {job.postedAt} . {job.contract} . {job.location}
              </p>
            </Col>
            <Col className="row-item-two" >
              {tags
                ? tags.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })
                : ""}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default DisplayJobs;
