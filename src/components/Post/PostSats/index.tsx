import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments, faEye } from '@fortawesome/free-solid-svg-icons';
import { PostStatsProps } from '../../../domain/post';
import abbreviateNumber from '../../../helpers/abbreviateNumber';

export default function PostStats({ stats }: { stats: PostStatsProps }) {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <p>{abbreviateNumber(stats.diggCount)}</p>
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon={faComments} size="lg" />
          <p>{abbreviateNumber(stats.commentCount)}</p>
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon={faEye} size="lg" />
          <p>{abbreviateNumber(stats.playCount)}</p>
        </Col>
      </Row>
    </Container>
  );
}
