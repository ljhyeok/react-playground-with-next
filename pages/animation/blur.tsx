import React from 'react';
import styled from 'styled-components';

const BlurAnimation = () => {
  React.useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };
    const callback = (
      entries: IntersectionObserverEntry[],
      _: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        // viewport 가시 영역
        if (entry?.isIntersecting) {
          // FIXME: test code
          console.dir(entry?.target);
          entry?.target.classList.add('blur');
        }
        // viewport 비가시 영역
      });
    };
    const observer = new IntersectionObserver(callback, options);
    Array(30)
      .fill(0)
      .map((_, index) => {
        const target: Element = document.querySelector(
          `#test_${index}`
        ) as Element;
        observer.observe(target);
      });
  }, []);

  return (
    <StyledWrapper>
      {Array(30)
        .fill(0)
        .map((_, index) => (
          <Box id={`test_${index}`} key={index}>
            {index + 1}
          </Box>
        ))}
    </StyledWrapper>
  );
};

export default BlurAnimation;

const StyledWrapper = styled.div`
  width: 768px;
  min-height: 100vh;
  padding: 0 8px;
  margin: 0 auto;
`;

const Box = styled.div`
  display: inline-block;
  width: 48%;
  height: 300px;
  margin: 1%;
  background-color: #181a18;
  color: #c8c8c8;
  text-align: center;
  line-height: 300px;
  font-size: 24px;
  font-weight: bold;
  &.blur {
    animation: blur 1s ease 0s;
  }
  @keyframes blur {
    0% {
      filter: blur(3px);
    }
    50% {
      filter: blur(2px);
    }
    100% {
      filter: blur(0px);
    }
  }
`;
