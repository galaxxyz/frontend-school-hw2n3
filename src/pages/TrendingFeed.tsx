import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import getTrendingFeed from '../api/getTrendingFeed';
import { PostProps } from '../domain/post';
import { Post, Loader, ErrorMessage } from '../components';

export default function TrendingFeed() {
  const [trendingPosts, setTrendingPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getTrendingFeed()
      .then((resp) => {
        setTrendingPosts(resp);
        setLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          'There was an error while loading data from the server. Please reload the page or visit it later.',
        );
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  if (errorMessage) return <ErrorMessage text={errorMessage} />;

  return (
    <Container>
      {trendingPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
}
