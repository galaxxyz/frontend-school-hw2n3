import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUsers, faPlay } from '@fortawesome/free-solid-svg-icons';
import { UserProps } from '../../domain/user';
import styles from './UserInfo.module.css';
import abbreviateNumber from '../../helpers/abbreviateNumber';
import fallbackAvatar from '../../assets/defaultAvatar.png';

export function UserInfo({ info }: { info: UserProps }) {
  const [imgSrc, setImgSrc] = useState(info.user.avatarMedium);
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col sm="auto" xs="auto">
          <Image
            width="150"
            src={imgSrc}
            onError={() => {
              setImgSrc(fallbackAvatar);
            }}
            roundedCircle
            fluid
          />
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col sm="auto" xs="auto">
          <div className={`${styles.userName} text-center`}>
            {info.user.nickname}
          </div>
          <div className={`${styles.userNickName} text-center pb-3`}>
            {`@${info.user.uniqueId}`}
          </div>
          {info.user.signature ? (
            <div className={`${styles.userSignature} py-3 px-4`}>
              {info.user.signature}
            </div>
          ) : (
            <p />
          )}
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col sm="auto" xs="auto">
          <Container>
            <Row>
              <Col xs={4} className="text-center px-4">
                <FontAwesomeIcon icon={faUsers} size="2x" />
                <p>{abbreviateNumber(info.stats.followerCount)}</p>
              </Col>
              <Col xs={4} className="text-center px-4">
                <FontAwesomeIcon icon={faHeart} size="2x" />
                <p>{abbreviateNumber(info.stats.heartCount)}</p>
              </Col>
              <Col xs={4} className="text-center px-4">
                <FontAwesomeIcon icon={faPlay} size="2x" />
                <p>{abbreviateNumber(info.stats.videoCount)}</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
